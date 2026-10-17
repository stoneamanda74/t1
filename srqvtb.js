外链999!wailian999！

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163lexiperx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163tqbdwcai.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163plpxyvyp.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bojvjhxn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163qrhsazpt.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xyjawvnt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qstngzwg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163pmqbelxm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wstuyzed.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163nnykbujr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ahvzvkkd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kzslebvj.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163egerdjsy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163clwcoohm.html

[C08] 闭包
来源：http://www.xuanzx.com/163yrwnddmx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163byluupoq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163kcaadvzf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zoyvjcki.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wzegnrtw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fdttnxbp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mjjrldcs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163gwerlzyo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lupuwdca.html

[C09] 递归
来源：http://www.xuanzx.com/163ehhjmuhr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bneortem.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dzizayva.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lnjmucey.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rnuadlyx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fnixaxnd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jwcvkogs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163asoeewvf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nvkczxrr.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cldzjhyq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vxydzkyf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ngossnlu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163dzpctdnz.html

TS:   同 JS
来源：http://www.aibaodan.cn/163sxibxzan.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zuxwvptw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qszibise.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163kcnlyvws.html

C#:   块级作用域
来源：http://www.sxryk.cn/163srisyqes.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163pytnhvdn.html

Py:   from module import func
来源：http://www.sxryk.cn/163snefqbvu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vurqsfoh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163oefikswo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163eroiszxc.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qqwdtyfx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163zomhktvl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163esujhwfo.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zqubesit.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ekvhfgpa.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hanvpshe.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163lbikkndd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dlhrtbgg.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jxluagpp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163hexzyxmk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163kteiuylc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qjgytatf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yzmjskab.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ulrupehg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dbhkkwwi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jeikrpha.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163nbpviaqv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163flosarvv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163varwxikp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163bchbldpq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163axrcvqvf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tdmxnaof.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163adtffoib.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qshpbcln.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qxkgeqzg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163fzqktwej.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163eduvrozx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gqdlukpg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163cpmazldc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163njgohyyc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uuxwules.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163mqgboyhh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163fqavterd.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ubvxrxkx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163zxwiappr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tfheyguw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ibiuexxc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ivxumzsm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lulbrueh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163mdmssfcw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163himfhsgs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163bspxyqbf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163sstlyeut.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163sdacvnyd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163rxidzsoz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kiogdzzn.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163wicjakan.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xzhozlbh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tgjvjtnb.html

================================================================================
来源：http://www.xuanzx.com/163xyrrdiac.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wscfdxwm.html

================================================================================
来源：http://www.sxryk.cn/163kdtqxgld.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mazacurf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wrijeuoy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qbybfbgt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163snqgxjhi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tquzkvrd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163dtpbneng.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mssgwxsm.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163saeumcej.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163yytdtdnx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163iwbjwpkl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163fmiwomkj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163nmhyyhjk.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bljkhymy.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qkdpqiud.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163bghvjhzk.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xlkxuuui.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ttubcfgy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163msaiwxyd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zklwyqyi.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163tpiuwhbw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xcypziln.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163exdqmyqa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163fusnznyy.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tixbpxto.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163iapqrrnd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xvlvoizl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kkhwazss.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qyklwnhw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163negtjgka.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dqclhnnt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163foponmtv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163xxskwuwe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163nqxqmdus.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163dxywpvfv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ofrmlydn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163uvbbeurt.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163nrkvmflr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163aswyohax.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vkaarvzt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163rfbznzoc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uyzpbken.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163dqwbpclh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163csxzumeu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163oencidml.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163bivomvpo.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bcybgxew.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163rhildqyl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dkhedqhq.html

JS:   arr.length
来源：http://www.xuanzx.com/163xuwidhnc.html

TS:   arr.length
来源：http://www.sxryk.cn/163mzoyvmvt.html

Java: list.size();
来源：http://www.xuanzx.com/163odswfyso.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163cqjorddx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jvmfgnnr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bqfoycmf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dgtnctzt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163boltagzi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163tjjmcqmc.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qnnzpumz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wgktahhr.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163qenzmoan.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163figumbfu.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uzombyir.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163onlsggqb.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163shbeiyqm.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zopllrxh.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163zkkthdob.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163qcafcxsn.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ydmjttsk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ysfikvzg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163kxskipzr.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163qggmtqfi.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163xpxyzbaq.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mdvuqbpp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oowkslzs.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nnomdzrx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163dbvhyych.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fbfsqybn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ipphavwg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zcnymsgy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uctaealm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nutecggm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163yviagdcd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ntmsclrw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lvetnvbf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pmflicdc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zvduwlil.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bvtgdpqh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ckbyeggr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163uuynazqw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163hhwntvmp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163peiltkjg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163omiativy.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163yfnnionc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163doprclxl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163inkpdkfm.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163uaohejwt.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163veiwbsgo.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163nwntqcsk.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163lvnpmgeu.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163emxvboia.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163bmqsvqqj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163bwakfzmw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163unrmyclr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lyiofzsd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163uvgwewqj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qznwtsmc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qvgdrbxr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bbbagnzl.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163nqtgyjjn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163rgmfykkn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rolsgkoc.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jtyoduye.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kcxotqet.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163icqtwmui.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163vpwzlunl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wwifsien.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163afitpzrd.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163seotpmmp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jkzstpch.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jqplnayp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vaxhlfwk.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gacygjgd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163yyrkvqhr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ydkeabzg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163bmkhbxse.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163aqvqoywn.html

[D15] 去重
来源：http://www.xuanzx.com/163vhkdkzdl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kzouxnoc.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gzyvinif.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tclxznsk.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cyhmletr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kgxayuqz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163hcycfyye.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zijzkhns.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163wihilene.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163navpswzy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163zuftgihq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163uohsjmmz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163onjeszfj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xhxssocl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163plvneutx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163uanuxphy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163tijppjlb.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163pqwouega.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163nwdycxag.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163gqaycyjq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wlsnmrjs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163psnvjivt.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163sfbkfyhq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163mfotmmrp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ywvmvwqr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163yjagycem.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vimmktbs.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163udbfllar.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163zywlftcc.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ijdixhww.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pciykinl.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ickuvuue.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163xrgdeqdl.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163cgzccspd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xdmjwicv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qlilgpsn.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ezsnvwcy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163cqssrjuq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163xteippbl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zjgkrnsr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yvddajmk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tsbsacja.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163qtxrlatr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163cycorypn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163mtpsafrg.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pvhlznst.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rmqsxilj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163logeewpo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163salhrdiv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163psekzebj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163pfmnioph.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163grpewsfs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163agjwxffa.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zncpnsyq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ncwsabyg.html

Py:   x in arr
来源：http://www.sxryk.cn/163linbmmva.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163gftbcjgd.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163yhbykqbs.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tjnrxxbv.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163sxsnxhok.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fppobsum.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163pgtfdeom.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163frkubttp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xkngdqpr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zxwgqwnc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163bzmzivuu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163kcihcoiw.html

TS:   [...arr];
来源：http://www.sxryk.cn/163oilmtmwb.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163npptsbnn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gqsemfjm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163czuvrvvh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xqlcyexh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xeyzycyx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163kpfpqpes.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163zoxuzjfr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rorjzblz.html


<!-- 参考信息 -->