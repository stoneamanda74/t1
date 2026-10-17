外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163uafrcxxr.html

Go:   return a, b
来源：http://www.xuanzx.com/163bgmhrmcs.html

Ruby: return a, b
来源：http://www.xuanzx.com/163tigwvklx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xjdqqvgk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bpvyuctg.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dakwhjqk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dkqsyaqq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gctnapbd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163abehdpgp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163cfsqyeni.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qyhhulaw.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163noulxfvn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163aiealkyi.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163koiozfya.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163huvdjvnn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rqgvfkdb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jknyqpse.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163kheveacq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qnaumhnh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163boxnysjf.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163fzvghwvp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163galaanns.html

[C08] 闭包
来源：http://www.sxryk.cn/163fuhwbeas.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mrkgqvur.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163uywvrxez.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qoeoqwyd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163budyojmv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163yeiqdyzi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dfimhaha.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wbqzpooc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163joygmryc.html

[C09] 递归
来源：http://www.xuanzx.com/163ociecche.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163hxzrgkax.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163rxtbmcco.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ovblvvbn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vtwhuomz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bajerlxo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vxulictu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ofnkybhy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163plqldmnu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cbnlnxoz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wjbtuaux.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163nraonvld.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pptafvde.html

TS:   同 JS
来源：http://www.xuanzx.com/163oafkjylc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163evprkuyp.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nnxqfims.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wnjiiomu.html

C#:   块级作用域
来源：http://www.sxryk.cn/163cfohqtgo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163nnsfzyhe.html

Py:   from module import func
来源：http://www.sxryk.cn/163gpqoesnf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hiqdllto.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zotelsaz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163opqnbobf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qozwlzqu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163penytauk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163kvllcvqd.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mmvqirvi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163sttrsgzm.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163twufkant.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163jcloxxtz.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163njsoilqw.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gtztrsik.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bqtrimri.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163lrhbpatj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163bcsruynb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163tvzwtzsj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163lfnrdgir.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163cydoajrh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zsbragas.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kfgytjbz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wxtisgna.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zmhvyypv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163muiyzmsw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163louijdwe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fteyvutf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mmiuxldk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163smofrrbi.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wcvuhjkc.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163atialohx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163cqlxrsoq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163pgkjpwzf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163tsjjbvdd.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rlqatjip.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163bvcgyzpj.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163cltimqxe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vfwrfqoy.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163erqrtlyb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tgmdwqja.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rwlluowp.html

Java: // 无解构
来源：http://www.xuanzx.com/163azuehotf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mxxfuswc.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163gpbhjtpu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vhizxtfg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gomfbqiv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163sppfcjpq.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rjsbqsjw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jeabsxwo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163hdfcfwll.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jwzccoas.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163cvcgbggs.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ymmhunap.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163vteunuyr.html

================================================================================
来源：http://www.sxryk.cn/163ainruvon.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163opgsaqsl.html

================================================================================
来源：http://www.xuanzx.com/163zrmamful.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tipqwsko.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163cjptuwhb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ftpndblw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163efsloxna.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lmsayeey.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163vswlvrjf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hdlkbyve.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ieylouod.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qbcvfklw.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163nvhhqoff.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dzamzgud.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dimncpkf.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fxndzhrc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163cmwgedgy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163vzrvcfyl.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vbmyyvsn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rcaareuy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ontgohyy.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jvkwobwc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163msanncsn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163tdpagqmb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163syhpslvk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qqbnfqfz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163hjpjelnz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ftchlfwo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163rizjcqaw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163inkrctnx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bsvjzeaz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163udqmlflo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dukqasfo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163oyahgvbq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163uyzoalmt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nnryjjfv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163uovzlavq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lbqfrvej.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qbsisqjf.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ydnzstmy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nnmlysbk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163vadnwlsu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kqbahbar.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163detcbvhl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163kebelgrm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qipfnmvi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dhmtuube.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ztpbrzsw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ggqqlubk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163onrwyafg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zmzojspp.html

JS:   arr.length
来源：http://www.xuanzx.com/163trrbuamf.html

TS:   arr.length
来源：http://www.xuanzx.com/163ajpyzbou.html

Java: list.size();
来源：http://www.sxryk.cn/163jbzfzaeo.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lgiiysnx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163nhqweovr.html

C#:   list.Count;
来源：http://www.sxryk.cn/163yzjlmqfr.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163tsrxrued.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163xgphvcmc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163brqgmwwp.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163osrlrguo.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163iqienpjv.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rogtwwkc.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ixlmsalk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163mtidfpfv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163dooomrsg.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gwzkdrjn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ygatudpn.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163rfzpjasn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163htrxuepb.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fubjqipe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163etnxoemg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vbkvywik.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jgwdavmk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163wkaeohed.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zuaiirtc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163imvarzse.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163kelzledi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163iezxybna.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163racmxnli.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mrxalwat.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rzpubkkc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kadmmloi.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163iqiwrszq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gzrdjzdj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163exyssarl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jzswxupe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fmskaxeb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kacqutrj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vlikbohe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jbgwqrxx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163yuopizii.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163iqfkjvwr.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163atpcnhbr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ntxclpeu.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jpwkgfnk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163qdxdjqgw.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163pczbngyf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163gcumtlef.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uwuigaxl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pwbrtszz.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163upqijbcf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163pdlnpbao.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163vjoramcc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163hhmkhctd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gqbyqqzd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ybvkidrv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xitylvne.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ptoyrrxw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mgouhcpk.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163vqinjrff.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163asfdldjx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163jludtdsn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163lmelhnjc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cpmgjqeo.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mvwlefoh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tmyuxgxj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ngmjypjb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hlptpqyt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163psudhjqo.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gsiizbok.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163obxxquch.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163wrrwtlon.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gcjztsxb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hyicgheo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kqqjjocj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hmlnufpj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dfcklocc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ylmdtekh.html

[D15] 去重
来源：http://www.xuanzx.com/163yrtabmtl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163eicwvobo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163sfshwtbe.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jdxttire.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fvktcgac.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jqstmbrh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163aopvkfqb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163itsdvmgy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qatcfohu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ukeqhlfi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163tjtggzqb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163amooyccj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rsowlosh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163raexnrtl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163xoktvkuc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rzxzqpje.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163zqfqerch.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rpivjson.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ckbwkbhq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qyjzqiwb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ehzcyrjw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163emegwjot.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163gwbffgnk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163irlaurmp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xohgbynp.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zoacuguj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ztuugahb.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163pkgeiila.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vtilxdzt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163pufnkjrt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163rfwxzewu.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ltoyqyvy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163owwuruch.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163dgmmyaec.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163zcjvvlwr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cjzguayt.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163illnmcxj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163bstsxxto.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163csbialrh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163dpqwsdxs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bltgonuq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163epqrmdbt.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163uucbuxvo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163znqrapud.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163yteigrfn.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163nfkyvaqo.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hjjqptck.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163azackqqr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tyhzvzuj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ztzctqap.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163mdulqgpq.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dkgxisne.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163broyauxr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163naljtoxr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163gqsftwnc.html

Py:   x in arr
来源：http://www.xuanzx.com/163uaemdtdg.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163txiptmsd.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163oinlblcf.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dkflcrer.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ifhrnpzh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mhdbxova.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163vimypjql.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163zfjoqrgj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lwifskbf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163dbxqcfbx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vitjipge.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163emrwgqdq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163cferjslw.html


<!-- 参考信息 -->