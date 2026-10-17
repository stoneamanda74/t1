外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163yyhedyuj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163yhadowft.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163wntoldpa.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nhxvkdzn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mmdjsscy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163slnpwybt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xgmltdiu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jasdkush.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wngfpikg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163twzuqavm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163tixekkbv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163abrdcqyn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zgievxnx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mvrtdzuh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163redmyiqa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163lbroyeib.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163yakrnqli.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hiykiwfq.html

[C08] 闭包
来源：http://www.xuanzx.com/163orawvoin.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hlcegygs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163sewdcsqh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wsdycrlh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163joomyerh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163pgbfzgte.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163iuwcfvhp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vukhhvki.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mkgwkjok.html

[C09] 递归
来源：http://www.xuanzx.com/163fxiezgjw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163kbiciujo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ljualyzl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xvwsocpl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dnbxyhwt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hqghgnoe.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163atfstzxv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163klivwrgo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hinaxwwl.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ykubcrcm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dpgynxah.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hkjdkbag.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163thrrxynj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wunbvjio.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ebkspqyz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ecsymogm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163kkjbtxhm.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163kdzmfdmq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163uifbgapm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mkolfnzs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rathakfm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163azvmmjsn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163wmoofjqw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ymjksrob.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163cuysgwxo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ynkfabwl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xqmdaspp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163btrscksw.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163foxqdrhw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163lybigrhh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rlhyaqoj.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xgxqmwfy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pfjjwhhs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qmujczar.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163kmlvvtbj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163clpdxkqa.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qiewoimi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163nezuugqt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qrzkobfa.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163fhopoggk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163osjvzyyj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pvltrpco.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163rcbpmwoq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ephwjnbw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163qrvshwcc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163smqrtcwd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fbnxwziq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ygnbhhiv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163vgjcozwg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163yipoitpn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163yzbakvkb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qpwetbtb.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bqpuglbh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163zrkcrpvd.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163anwabyra.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163oxzohusu.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fanzfzwx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bvdtwkbp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jvvmhfyy.html

Java: // 无解构
来源：http://www.aibaodan.cn/163rzttkzzl.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cokmvgob.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163izsmpzqy.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163cafwygvi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vsmtwljc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163lhadbomw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qjstxzzn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163dyffauet.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qeztwtjm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163vbakivxz.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163pcfrjhzs.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163swhwkxqk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163tycdcask.html

================================================================================
来源：http://www.aibaodan.cn/163pvmamgwh.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jjiyhgho.html

================================================================================
来源：http://www.sxryk.cn/163hbjmxjck.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ueftzzrg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qpwnjczr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bpyrknlr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ubxatzqa.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dubcxqkn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xsffdsov.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163gzpfifhh.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163akxsfkgx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163iqryzhqj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163rgfhkgcf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ranaxayz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163tutkersa.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jnvvcuaf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tqjrcadk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jbexirnq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zwvwtbhf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163hqgbaneh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vmvuaaue.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vnxvpkgc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zplogcmt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lmovkhpg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cppcksbk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163dkxlfaur.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ihqeziqp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163davoiwtp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vgrkdkqz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fvvglgza.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wuayqvor.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163tcbuapmg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vlxhczgo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163jeptojjr.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163uufknyjx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hoekqvjv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163kciyqzrl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jnjwtbrl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ztzdzaqf.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163pjhyicvy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163acvybogi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jkbuaxfo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163xbmygpep.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163vqonblei.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163wxapgtas.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163hocwfrzn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163sgvewzjh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163kdnpqten.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163krmvrszw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163rdcqbmha.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163gibzchzm.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lirvplkq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163wrywyjhw.html

Java: list.size();
来源：http://www.xuanzx.com/163qwuzmfsk.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mqijjxmy.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rzktrnww.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163gefkuedk.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163jymhzlip.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163egymtfhx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163hcvrygkc.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ztdwcbxs.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zaafhees.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163szkfhmxh.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ryjbnqng.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nfekwmau.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163lxtnyywy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hbqsumfd.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zouvzbdb.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163knqqcvrf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163sxiwigir.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ztktkrlh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pjisyezv.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163usfgdary.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gnizwxne.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163kmdpejgt.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rgxdxkct.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ecopqosv.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163yfxkubtb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163zzcbwhdn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163yjddfdli.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wafqpyhj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zweprveq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xfneleha.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163oitfgjfs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dbxdjoql.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163wwthrgvc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163aaxcuaex.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xglsdvun.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bnvqfgtg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163csltgnvf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fuzawurw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gjnnlodq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163nuvryafh.html

[D11] 反转数组
来源：http://www.sxryk.cn/163krzvngtg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163rdzxrydj.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163myvkfmlw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ihfgcwym.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ocrrtddj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qfeojkhc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163pnhmolhb.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163pmkwwydn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ieiptmsx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163uycywiyp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ansxfddi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163nwqwyuba.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gzqdwmjs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mrslqfxj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mgeoekgq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zxnusfcl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163cqxpqlzc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ghwsoupw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163inaoyoso.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163morpsfcj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163thlkseym.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nghmabtu.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163oftymkai.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163qkgjrioh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xfjrglzd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ddvcgztf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xtdhwhxy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163jvhyvhwl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rqyqoujx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163drbukkvw.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163medeuciv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163amioalzj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163exkcrnwd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cqbcxugd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bklwthpm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163jltgbqdo.html

[D15] 去重
来源：http://www.aibaodan.cn/163ffmzrgov.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lhpgcgsg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163uhhsvsep.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tlrjvnne.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nbilqdrc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163eoplezpc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163askzeldw.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ynvejnac.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163nzpwvkda.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mqkhwtsn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wwgzwrvv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nzzibfwy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jndcrlxj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vhpkradn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163tpybnpyh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163yphpahud.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hhrjiggl.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163yscccriu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163xsnbfjhu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jcvyxlvr.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163sfqglcmb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163pxjpgqor.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163jthzajth.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ponqjvxf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163flxjckpo.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163nrtmykdj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wxbyehxy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163alxkmwnx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tmlhdqys.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163elzkipxn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163fpeelkrj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163lpdtqnnp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163nbndfjsj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pozzeijs.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zkbrqvky.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163itlqisbb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qkanfhfj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163nhkwlwvp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hsasqfhd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163zeeiouzq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cmbhvepd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rncpcsgy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nxwrvyei.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163luoiharm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163upwsqmrv.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jghectzx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163esjnfymp.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163jtwjoncu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aufmyybs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aitgqjfr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163mgflxyac.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bpqlxyam.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163iukjkmkh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163nseiiidi.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163uebzsawl.html

Py:   x in arr
来源：http://www.xuanzx.com/163zznepeaw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163jbqbmqqz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wsoyvobg.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xjpygecb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163bpmqzebt.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ezcevcvv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nqamxxhd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163txldyoxt.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163woqcpcgc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dlhcpsex.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oppnqleq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vuajvtoo.html

TS:   [...arr];
来源：http://www.sxryk.cn/163djjwqmkx.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ypntftcc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163tziorxty.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163otzxlrue.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163svmkenjr.html


<!-- 参考信息 -->