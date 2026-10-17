外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163eynjoyjs.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bcygzysf.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jdpbjwrj.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xbqfjvye.html

Py:   return a, b
来源：http://www.xuanzx.com/163hqqgujqs.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163oicwvutj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163fwkkogdb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lwwudyry.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163kprdxtsv.html

Go:   return a, b
来源：http://www.xuanzx.com/163hxcvnmpg.html

Ruby: return a, b
来源：http://www.sxryk.cn/163sahsdpoo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rzklqapy.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163elxwjnvt.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163cmnmupua.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dovblrql.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ucuwqaoq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163znlykplb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163rbldcfmh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163fcgpnqte.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163upimgcsu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ltavgchy.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xivvhkga.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163orgkvaic.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rpijfbiw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163unlaevej.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pchwdawg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163booczosb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163snpubuti.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ezxfaren.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ryvevrhl.html

[C08] 闭包
来源：http://www.aibaodan.cn/163msasrfcr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163bzrdaona.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ezxyuund.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jukuksct.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jumwmmmj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wlhzrvim.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ewgaurlo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163edmnempe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ssxhtxbt.html

[C09] 递归
来源：http://www.sxryk.cn/163jhqjaqba.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163nbcdiqji.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mvncctis.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zuepeolf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yofobmvb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163nmlgteua.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163siocsivp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bqoxxcrx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163jbirjvud.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rvdeweeq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163absjufhi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163aaluvxoh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ymgcqtdh.html

TS:   同 JS
来源：http://www.sxryk.cn/163ifeadfel.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163iutybizk.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163dpghealg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163smffhzdx.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163tefindik.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163falwwiqe.html

Py:   from module import func
来源：http://www.xuanzx.com/163byjishgh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163cxrdlaja.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163gohlhqdo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gkplzbmw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163dwncbudr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mvqvxqdz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163erxclyuk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163nlcuiuih.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163tktfyyhn.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jiknyryk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163gznedqxl.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ltsdnddc.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qiftxexh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163igwnxrva.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163iqphvony.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163eeclhbep.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163xujyfqbe.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163lasaeqao.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163czayhgjv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bycdchvg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163jsjrqgiq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yyvcnwjy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hptrupmh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163brnvgfab.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ixdasncu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163axxhltkp.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163wpsjsgds.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zyubncev.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163opomuhsc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cwqimpoc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163boggdhrk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163xrzsjvid.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163lhfbkrva.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gkmvixop.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vwshever.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jerttapq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163pekyiyot.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163rsmuxuyp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xizgzomq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163yoqhbztn.html

Java: // 无解构
来源：http://www.sxryk.cn/163bmpkxidu.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cbnpiyck.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hmivvcqy.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163omaiffkr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jiojhzky.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163rgltzcaa.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163simuqxjo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ygilsyew.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163eqkgstcw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163omvsijho.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163njfufiax.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ddksxbat.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rfyhdkze.html

================================================================================
来源：http://www.xuanzx.com/163euccfcoe.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163todvcxdn.html

================================================================================
来源：http://www.sxryk.cn/163lipdytve.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163jpuwzsti.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163lvmozhfe.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xwkcmdie.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163brpmvqzg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ftsaemjn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163uinyuhfo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mufiqalb.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163wydpzfyg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163pljfxjbu.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163iissyzyd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zpjmbncu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163eijagouh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163tgqagiql.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163nslyumdg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163cuqoxcrq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dadedjvc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163cjwetxhp.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163sheuxgyj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lxktaftr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kkoiyjqd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163iwykwgmi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ukazomgw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ibxwyvaa.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163lhtgfzxg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vztodfmi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xmgvojjj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163gnqcjlwu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163unqetsuw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163kldhtwqt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qqwastuw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163jhogjzaq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163hkmsbrwx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xhvsmwzq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pzwryjpq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rofohpkh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rbaizibb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ckmrkbbu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163izkdzumr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163epwqxojf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163movrcsts.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163pdrthhez.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ovjgzcmn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ielmrvrl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163znuvvuon.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xgiqaftg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lygygnyl.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163efxazhzf.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163yzmhwghd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163vxvitrnz.html

TS:   arr.length
来源：http://www.xuanzx.com/163ixwhxxby.html

Java: list.size();
来源：http://www.xuanzx.com/163dgfjzexd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lmpyvhpf.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163wlxgqcwm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163pcznlqiz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163gsnevzet.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fsvrvcbk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ggpdoctt.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nexunile.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163chiohipx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nrlbfpzw.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163eftjirqz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163uikzdfls.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ylghpgdg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163aqzbysna.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163leqxkecf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rwegjsmb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163fydidybn.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163yxshoepo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jovrwpgy.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ajrduwul.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tshoihxt.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qufdxvbn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zlxzssdx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nfhldjcx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163rhwvxxgk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163itgjkskh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rfkjofme.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163cpzjixjx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jrojccqh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cwevlrew.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163lhjkkfyz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163qtwyqbzm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163stajeplo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pkrovrkr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163iddkjjtc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bsbeypou.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pzrezpar.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163lrtaxtbz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163fcerqiqz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bivrohzl.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163rgjdrnhi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163oipkgdvx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wocnmrye.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qmmlhbki.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163gtxlfewi.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163reavptwe.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163oldgkzyg.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163fttnletu.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jgztuujx.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163yuebilpu.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163bxeifbih.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xgclypqf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wgfogxsq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jrzzohzu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163qlbfwuxq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163qydjnzcc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163agfibgyu.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ydivjvlg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ghqhxcff.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xwaauvay.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163wewdexpr.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qsyexbct.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163myauujfh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163weqylyba.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ioppjepq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ionztzoa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qqghdufb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163umraumnf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163bihnovmf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jrekienv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ngavioir.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wpobvxcg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163czpfgegw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wffswxjv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ykzicrmi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163zokxcmya.html

[D15] 去重
来源：http://www.sxryk.cn/163wxbhozve.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163usqlybff.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163knnebutu.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kmxxjace.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vkkwajwv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kfcfksda.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ewbpyndc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163kfmgbhoy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wgsybguw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fopdiqfs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163nwrpywln.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163stftvsbq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rdbalscn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fiyxisdm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ggwhmvzb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tzpfcdky.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163obuvkbca.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bejgbaim.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ziazbicl.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163hiocxhej.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ycbzteaj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163blbwcpmy.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163uqvxxhhl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ovcxzzuh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ayhizime.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vdbwfytv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zrlyigzt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rsbfawzh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ivalopip.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163iooqmbnl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kfphdpga.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qylksypg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163zdbrkghi.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zjdlyxsc.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ptooffva.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ttohmdkx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163juikxwuk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163kivoyord.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hjcobtjx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jjwqbjkb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ohfnrjnb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nxsnbbar.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163qazhwvqi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163iqimmqvx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163fprcmxcj.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163dofwcoad.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lvtagpnk.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fqwxdoct.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163keezijdv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tzpdilbj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ouncevsu.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zmvdjghz.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jrwkmnal.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163alcdhhos.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tkwrwncb.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qjgsujfr.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mhpkjmzo.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kvltlyhw.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jjseoxqo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kfdzpzed.html


<!-- 参考信息 -->