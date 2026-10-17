外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163qbqevxzc.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163dfisqplv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163bqgyvuov.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xqxtnyhh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mkcxtzpv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163bnjlbygm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163hvjbgqjc.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xydruhnj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kzywqlgz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163qcfhohxp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fxxrbvca.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ogoicptv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163phbivzyc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163aylrimsx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xiufrzhb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ykvgwzpt.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ifysaztx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pvdgcfjw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163gmpmddtt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hbhdosas.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mheayttj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ptrghkax.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qbpxcwpa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rfqleagc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163dplmbjbd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cairnvsf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jtbkutpg.html

[C09] 递归
来源：http://www.sxryk.cn/163wjuuubmr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163fkrzpllw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163iqncazju.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163siqlsogj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jymslnve.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gusimwpx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163awnnmvnk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163bvsypqwp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gqvqxyjs.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vofpyicr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vhsswpon.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163trtjsmpg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163atagfesn.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ppmndoni.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qnnpdizq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163csfqwwtv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fvbvgqri.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163uunpnjpe.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lhuaajlh.html

Py:   from module import func
来源：http://www.sxryk.cn/163nftinokf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163dzoyczdt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gpomudyk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ymdasojn.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163kswjxygl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163trjuyjud.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vnaspapk.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ebeaytez.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163hcsilarj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qheayupj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163bjgaclly.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163moriandj.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163riudnget.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163oqeshovd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163aegeaykl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163htlojlbo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163zbsrkkro.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163abpdwgzj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163eumemknc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mswrfuer.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163wkcnrinq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163oippugll.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163laaimqtf.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ixytadzk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nwgmncvg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163dreomcxk.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163nglistfx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bnjchuvc.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163szuashyi.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163natjkksl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163nlprjwcn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ysefydnc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163amlqnozv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163cmmfpycm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163balxtvuk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hxqykbio.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163phsjwbzo.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kkosaxcm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bspqhkhx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163sgvgddho.html

Java: // 无解构
来源：http://www.sxryk.cn/163nxrwnupo.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wvxlwmnl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163nlbegbbc.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163fxmwmzdw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163yyutrwlr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nilcpfzc.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mooktstf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ceppahzd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163apqttbwu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163psnzdxgx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163vvodmyao.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163enyxhplq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wulvgnpf.html

================================================================================
来源：http://www.sxryk.cn/163odzypsrd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163srztxnlq.html

================================================================================
来源：http://www.xuanzx.com/163ostfcvmu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fafxfhio.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sysphnvz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pgegteci.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gpdeeyvh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pnlrotck.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163cyyfqdic.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163osejzkpr.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163rktndlni.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bkdvjeoj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163oaazlhnh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xltolykf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xhsxwfkl.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wnyijxhp.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ozqwfjnu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fhtpppdq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jsrrvakb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163jsnrvgci.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163cwnadgyp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ajikdffm.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jfdcmpsv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163dvfjedea.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163dvjxftja.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163soeznfpp.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nakutuix.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ndajhpkk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163njvcgxfr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lomenitv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163uxmuwprv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163bokhzuxk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163szsxcwlp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163nojcduvg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vbqwfpfs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163djyedhdj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163zlobfvtt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mhxvyhij.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163dgdfcqca.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fytfjile.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ecpugfkk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163qdqghjmh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vgoxmojc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lsprzlng.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163phxvxkvx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vvrfnmxk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fadlhtbz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ukgzaton.html

[D06] 数组长度
来源：http://www.xuanzx.com/163olzzckyv.html

Py:   len(arr)
来源：http://www.sxryk.cn/163sxapgjof.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163azegwyrl.html

JS:   arr.length
来源：http://www.sxryk.cn/163vubldpai.html

TS:   arr.length
来源：http://www.aibaodan.cn/163volakbjy.html

Java: list.size();
来源：http://www.aibaodan.cn/163dvrqieyq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163cxazbder.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wyfnbkit.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163xilxiibq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163plxkkwty.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163rltmzsbk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pfozvhbi.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hqvgrwvd.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fofgncbk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163tnpdolwf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wvehetsv.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163cndhybrp.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jjcmpdna.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tzicxvoz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163biogyypo.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163sblxabuo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zxpwwquq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163rnslhukm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ylrfcasg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163frjewkyy.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163nxtqxbos.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mzxvvpkk.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lsxvtwio.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163whmojuhn.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163rdcwkpgv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163geploejd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vgzshzqx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lntoegzo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zklkpagt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dpjqywnc.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163huixnxjo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163deexqani.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qrrfwwye.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mtfphebo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163auubhiqk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hgmvxeqj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163suxvaedx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163jphtkykb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xgvuvhbz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gmbcpvan.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163yjuvxvov.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163uoethdsr.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xueukxzh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163egkvigyw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ikmwrawk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163drlfrqwb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163egluevjj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mobqactu.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hdfwivje.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163jvpkpybe.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qshearvr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163nxwxexrs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zganmelk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gdrmhuej.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163bpuxvzfo.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163rzzjzaal.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pkpjipuh.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163sdeuxtrn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rcbyhcni.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163uwneomnx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163gbwjhehj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lzdqqoev.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pnezeyzq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qwabyujk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163pjaxatcg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163iglrxkqj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163vcbxinmx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zjzgmjxl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163vwlyekzi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vxwqdzzo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163moxsbwjp.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hwjnuldx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163dmhmgwcf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163avxovlev.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gtfojeon.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163eipgfbpd.html

[D15] 去重
来源：http://www.aibaodan.cn/163smwpepfa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mtmgbxfo.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ppxmqebb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163frkpeutw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zuyujmeb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zuxiwisw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163wstocgdx.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fnjrlwrf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kmxnlxub.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163mtdouvij.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ghmpmycd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163elojujfm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lhaevkby.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pzhwratd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163sxskpxfr.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163feniqxgk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163qqjpzoav.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fsaxcgui.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ahhsuqhd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vkhrhyhy.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163yvflldur.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ypbfvypm.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dgblzwky.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ooturdtz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163gmwoyozv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163clmmbhno.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jbovimfc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ynrpfmqa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wbduxrfj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163exeysdoh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qqtmcxhi.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163oeadvhnk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163qgbiowhl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jpqkmoee.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kbwaoudv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ppmzfqkr.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hxhrxmlm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hgsjqyrt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cgojtcrs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163khdhstuf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ejdqcraq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163yyynadcv.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163pccvrcab.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163xpiskzah.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zoltbwda.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ymoqkegf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163qxdcmpby.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163iittbzex.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qqolcrqu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kpdqvtbc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163jtsyodqo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163inswlxkp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163iocaggdm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fkryzwtt.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rxsnxumq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kaxfcsjk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fjmciavs.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ymylogae.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sjtjfsjp.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tehwapcj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163uvosqivz.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fpflfvfw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163iowtikqv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163rnubptor.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163aelcbhjm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163hknxqhvt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163zsgtjdyf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hqjmcmxg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wugdkmlh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mgnrnnlq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163deeacioe.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163medwqemq.html


<!-- 参考信息 -->