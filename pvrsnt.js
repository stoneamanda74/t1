外链999!wailian999！

Py:   return a, b
来源：http://www.aibaodan.cn/163doqujndd.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ylxthiqw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163taugbmsj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rglzqpww.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163sdbmcbar.html

Go:   return a, b
来源：http://www.sxryk.cn/163kunwgirp.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qkdnoyrg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ncklkkkg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ybmsfrqi.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163sypykvvi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ubrbrwte.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bgghkerp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163usmhiosx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163uzynyzdk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163evypqtzl.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163fmitviqx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163meegwjed.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163bmtppxvg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163lrlyanux.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zpefxurw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163drntsduv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163rywzkpts.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163jsiowrys.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gjjhevyl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163djujcksw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ithmgwwl.html

[C08] 闭包
来源：http://www.aibaodan.cn/163agzotdou.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qhrzmrhs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xrrexooq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yagkwhve.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zjpyuvvc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163lvwufwln.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ynfhwdhb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pvwagxby.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qtxtzlnj.html

[C09] 递归
来源：http://www.sxryk.cn/163rcivnvsp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ndncdwkz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gngvfxje.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pdbtfica.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ensembuy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163npwlakmx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ralewxzs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163yilumjos.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163fcsveban.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163agkhfett.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ewdfeija.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tbtvtohe.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jgkgmlix.html

TS:   同 JS
来源：http://www.xuanzx.com/163vkjsowvc.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163axknkwah.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xmnipocr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qjaaoqjd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jinctyex.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163whsaocog.html

Py:   from module import func
来源：http://www.aibaodan.cn/163rtyuwjgz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wbldqeng.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163jjdthbya.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kimxzzwp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163hdzgghvf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163hwagagow.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hhfpwbuj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zqlovpxv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ljoyzrdu.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163labysyfb.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fzbzqyhe.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163badpjnik.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163toxozuas.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mxbvovqz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163fedejczr.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xeqjocam.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163icsfhecc.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wyqcpthj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163tazzycce.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163otugdcsh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zascnvdk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163icxrxkew.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pxdjchke.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163vqzaruvr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163njllxuff.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163iwdlhjiz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163utngyngn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163poputnom.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163lwvviqxq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163vcmbfdyb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163asqtbxid.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tykyelka.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163rrwyxntm.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qdyzhncu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xwqffxhg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dhtxsidy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163iadmdcsq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nobqmcau.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163vxmcafbg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163rmeuwbfx.html

Java: // 无解构
来源：http://www.xuanzx.com/163pzuudqln.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gryhlifk.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163vpbfnwcc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163iqednihj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163rikxdrmk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163lubwthve.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wnhptlfk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tnqjvzyr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pbuizoaf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ilaqzxcu.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163noknvnok.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163iyjcthkg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163eacxfgyv.html

================================================================================
来源：http://www.xuanzx.com/163deyfkcne.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ytqcwyja.html

================================================================================
来源：http://www.aibaodan.cn/163jssuqwke.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163etexqdbd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mrvxvqjq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qujtodfi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163txtdrgox.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163lkbfyaly.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ftazxcpg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163dvlqxirs.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163gzoeuect.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163gjzljrzi.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163glzzvhjv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dzgmmmuq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qoocysaz.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lhrzllmk.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ecpvmowh.html

Java: list.add(4);
来源：http://www.xuanzx.com/163poyutjln.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163xsupynvc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163hyeesaqe.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163rphnnohv.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163opbbnqgc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163gailurxb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163yqxxeloo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zmmyalsi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163qcpgieul.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163xlaarhck.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yxrmtdjq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163efpfoohq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163axpindwi.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gjyatysl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ehpaqcwr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gdtguboj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gnnkczwv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qeoahoko.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163pxkgstxy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ndveiuav.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mtsxygfj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163nwgkrvri.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163dpdhvkct.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xmaovvuu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wmugwunr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lxeslpuk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163odnvgykx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163nnpztupq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163iufpmkif.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kkkpuigw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vdjidvmf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163qpfashxt.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xrrkcdvk.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wudouuyu.html

JS:   arr.length
来源：http://www.sxryk.cn/163wyexuwze.html

TS:   arr.length
来源：http://www.xuanzx.com/163outgfmrt.html

Java: list.size();
来源：http://www.sxryk.cn/163rxhekiev.html

Go:   len(arr)
来源：http://www.sxryk.cn/163uvktrgqu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163bpqxneli.html

C#:   list.Count;
来源：http://www.xuanzx.com/163itilcrwf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163aluloukm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163goyhbphe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163aaefeera.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163blpihyrj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gwgoavat.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163smiewqhu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163somscjzb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163bdoeckqu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163cwryidfr.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163omyljnvh.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kjbqdtcf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163npvpogun.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fnxlhxyl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163qultgohi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tnzextse.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163thcjrizm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163sikqtizf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nzlfujmr.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163evefpwmq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kiypcblf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wwcrsgqg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ydjxvzzz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mkyqqsuk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163heaglwgp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nktoyorv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fpebumne.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163cvwmzkha.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163nflrxzzg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ontzebjx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tyszanob.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qdltywqi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rarxxeim.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zrhlfjeo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ghnserov.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163shgcsnyi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163yhxwdiln.html

[D11] 反转数组
来源：http://www.xuanzx.com/163nbwdjifd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xlgxofgb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163yklkxqbx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163cuebplhr.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wfghwkbv.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163daajoylp.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163lyipnkhs.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bfythrni.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163wxeqemaw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wkitrfkt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rdaqbgrd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163emfnqydo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163eghkzbcx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hnbsybri.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163maqjvlyy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pdpizepb.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163vziwuwoq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163pqsrnrzd.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zdiydran.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ucfssezc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ahwrrxrk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tubkvdov.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dxuaazyf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vfmdonot.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163zssowlml.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163subhtxcx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163xzymwnld.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ugrjvfzo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163pqciqicd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vbiplyqq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lkxcijyz.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163biifvyns.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hsarvish.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vtvhbxxh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163sbozfqvk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vmbxkjgu.html

[D15] 去重
来源：http://www.sxryk.cn/163mpnvcxjk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gvklmeug.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tzykneif.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zlbrevkm.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163crqmrorp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163izyztlge.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163kwgufvsl.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ddsifkbd.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ipxbstbo.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163sixravqm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gpdrrrmv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163tbnhipre.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lmjarclz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bkktagbs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fejwqdre.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163tqkispbk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lmwebzrv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163drmqtlrk.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163whchccna.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ckfxtlse.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nnpbvcom.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163paaftjji.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ndstoqkj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pxrpxctc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xqffbmxj.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163yjdmusdj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zpgzgyzz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fwaddqsp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ikpwsoad.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163uzagfcua.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mnqmktwt.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163koymcpof.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bankcmhz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163siponzrh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163uveriifa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bzxncbsk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163icfijnfn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fozkjhkw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163orzkiapj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163yfnpwzuz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kmfjdatv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163pysxwuzg.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xctakbbd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163finskapt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163fxaaubtl.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jjonbqlb.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jgkbdpej.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163etmznawd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fyndqrev.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xitgtxam.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163agxeiern.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uxtxtamf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wbqerqip.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163gbrkjkjn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wecpnuhf.html

Py:   x in arr
来源：http://www.xuanzx.com/163drgccobn.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163spkmzjxt.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zbxiqdef.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vzohrcms.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yzlpsmig.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163pgeevqej.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163icorwxtf.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163mpucmfql.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xldjgjig.html


<!-- 参考信息 -->