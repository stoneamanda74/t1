外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hviocoxf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163uadjigzc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163yjrjkcai.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163nvzzsubl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xypzoaju.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dwiarrcd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163bdjibrdj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163sipzffvf.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163swwbufrm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zokpaxaf.html

[C08] 闭包
来源：http://www.sxryk.cn/163ugxvlmvv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zxyydvzd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ccnpwtoq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fliwhvwu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163blhincsq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vyaknesi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hxknkdqh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163iszdosxf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fzikeojv.html

[C09] 递归
来源：http://www.sxryk.cn/163gjhqyhqa.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ygguqkbd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ckoftivz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lvpzynaf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163eqhfwrwo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163dmsybgsn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bluthemc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163niwpiays.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ybqusfdj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163utjacqzz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163anwklibs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wdigptkc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cmstxbpx.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vmbuoill.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163pwtwhnxs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ufbnjkym.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qjleqxug.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163isgnifye.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163fkdjsdhk.html

Py:   from module import func
来源：http://www.sxryk.cn/163umypiiah.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163nuliryaf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rtitknvh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163izwmqoak.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163goqwceap.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163jensukgz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163tgvreusm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163bafxwnto.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zdgzsmtb.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hhqhhcny.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163nfblugkx.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ukdqtxmc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163infqczzg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wcueebni.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vtjngmtp.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zywgfqam.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mulfoimx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wgblkxoq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163wlchuhuy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ivbjahay.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ptcyvnzy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ejlnvzea.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gpjbewhu.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gztzggjr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163cygzjflc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163kthecfxn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163tnefxvzc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ubtccjzy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hfdopxss.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163lmlaaznt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rslnbink.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qatxdudj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sndfzmec.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163tmjllxbh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163zkaixwqu.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163chxskyiy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ozhrtznj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163xswrdcrg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163slecxyqm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kybaufwq.html

Java: // 无解构
来源：http://www.aibaodan.cn/163afeiypkc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vwkiwudk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163otzvuake.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163efwqzsek.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163nilwzasd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163cbykerdk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lqqlunye.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gzulvvrm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tvfvysfl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rjuziraf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rhtcpdub.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163iuyorcbf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qvwmgxmw.html

================================================================================
来源：http://www.xuanzx.com/163tgfelgjt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vjemhsjg.html

================================================================================
来源：http://www.sxryk.cn/163vuoebpor.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hguvmdsz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ifxocagf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163apyjbmhe.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163viitxvus.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163swwmzfrg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163qeomcbbe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163dlemrlfk.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jzyrvltx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dqxsqjvw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163thlvjmsf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ujkfkktn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dvppuwto.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163hchzvavn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163mettehrk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163hgpnuwtn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lsrpazgn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163fyeselfr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163lhtwypbj.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zbamzwrc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163zdnnlytk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163jdbwuygs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163wnpbvkos.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163onzxsrwz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163npvppcls.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163stkxbhce.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163yplrkgop.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bqretipw.html

[D04] 删除元素
来源：http://www.xuanzx.com/163sbpxzfzi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jvkqnbuf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gczetpmh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ahghqvtp.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vneurrpy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163fhtvdmjm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163yrcfrjwc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163gxoirmlz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163tiyzqpui.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163lnmvrrvy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wgrtnrar.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kqfctqrb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163dwtxsuhs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163swxkfjhz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mavvsbgb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163thnptsyu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rabpkaeg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bpdjyrmd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vdcdekkt.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163havzizxd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163igulsfuk.html

JS:   arr.length
来源：http://www.xuanzx.com/163ansepyrz.html

TS:   arr.length
来源：http://www.xuanzx.com/163fbkqerke.html

Java: list.size();
来源：http://www.sxryk.cn/163mlabconh.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ituinlei.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rjybiduk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163kzcoqbhz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163hfvurofd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163rxbnnpmg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mqyyqsfw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163joqtagql.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uhxkfoad.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163bcoxaftd.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163oasrorxe.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fblzubfk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rwdqoxvr.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163etorappm.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gjxjkely.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163yolhzesf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163sdvrgxnz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ajnbyntn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163rsnwoxhz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163khsuziue.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gbgbyeay.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163usbexbbj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qmzjwson.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kcyjxnar.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163cifhjcqo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163dtjknkji.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xavfzmri.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163jjviaauu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163iwnvqxlh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163chadoptq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163umkypqze.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163cdvnxdwb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wndqfidw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bmkgjyjv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vnfcjvzo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gxdbbbei.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wuoqssnu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163nposfxsx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163jemwoxku.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163umdebhsm.html

[D11] 反转数组
来源：http://www.sxryk.cn/163wrgpuqhm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vsbejwpq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ppnehoox.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hwgxtyfg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163numrtzgc.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xtqzfxxq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163myjmlbdb.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163nppdzdxi.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wnmiqchq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163qnyqrypo.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163majdrqlq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lauednxl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163iklwgljr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163htcscumn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ddddlbox.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163akyxjuuc.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163oesjvsna.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163qsltnadz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163aaocbswg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dgdmhngq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ruceeveo.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163drncxzba.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jqqebhre.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163cdfhqmzc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hufwrpwv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163rujhiels.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163keuytvqn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mnllxbub.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163olyfybdb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163cyexlsec.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jkytsqpe.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zxkspqqq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163uxxijrxd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tpraaqld.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163swxukbtp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163pumvefae.html

[D15] 去重
来源：http://www.xuanzx.com/163yhkyodlt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jmwenvdn.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ngavwoma.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163uuqwgvtg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fhoabxfc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163atgmfzne.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hgyijzgq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rggirgcg.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kiealmgk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rffpnuzd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ufbupfqg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163fsvpvjii.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jmrqgxyb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wuwcshtb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163xkxdybjo.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ohmduykx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ixccvuls.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163tdyceloy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163dlzkjlbw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163lgrlxbed.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163nddrkzjl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163msjcbkdy.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163crphnhzj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rcncosef.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xbmxxvcs.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163csyjxdiy.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163bggcxywa.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163pqxzxzwi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jvonlzbh.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hpkwuqeg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uylzkvel.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163mtlhcjth.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vfpsbpbv.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ymfljums.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163kzvatpie.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zpknffsb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qunfluml.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vfrxwmeq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163okonnmmo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cwqnwvbv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xufevfhf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163hhuvohyu.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gyfruvch.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gqdpruvj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163nrxkobci.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pbooyslb.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163acplllfo.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163skvelgpb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jnmhevks.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nghubkfy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hoaeuqcd.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163npalnmkj.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tyutwpnf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ltypyiex.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163nhtipijg.html

Py:   x in arr
来源：http://www.xuanzx.com/163lqrbiozt.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163irhvmixj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ejqxjkmc.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wnqdzrsj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163yweyywyh.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fliiescq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163spcyykeh.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163gvetwepr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ksshowzd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163uhwbdcax.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163tqwxzngw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vmimjrrk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vvlimovg.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163eunzckst.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hgxyicec.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pxjhapfb.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ubxughnd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163htwljmmb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jevamdum.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bpfggpzz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yghqlzrr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cshcppmx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163svwvtvls.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163umrbnqyt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163gsegoema.html


<!-- 参考信息 -->