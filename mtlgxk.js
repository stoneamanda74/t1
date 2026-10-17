外链999!wailian999！

[C02] 默认参数
来源：http://www.aibaodan.cn/163fnldbqyb.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ligzfdmm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163cvkpsbxg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163cnfkacep.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ijipqtkn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163omanrrti.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163tykeercp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163yxwgzdqk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163sgkkkilt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dpfxrqij.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163tpwqiwwd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163lzrqxxcn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hgvhssoe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163twpwqzgo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163mdkrgulc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163seyusiyy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wzaaqgzc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163gxvadwxj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163updohcqj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wgwggqlu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163yiwbtwte.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ntpxmhla.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fgqpxmhg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jjawbpww.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ywzuvlht.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pwzlltbs.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cwreljew.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ogzodpay.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zacblphg.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163crrpcfzg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163bzkaarxz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mmdzhcms.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163echgigph.html

Go:   return a, b
来源：http://www.sxryk.cn/163nqppglsb.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qsvymjva.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163pfogqwsz.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ergdcbhi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163sprwopst.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163czidsquy.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163pwtudkrl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163etvnanho.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163saeukksv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163omllnpdk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hrbfxatn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163wqksbmjv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163urxmkmff.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ynnvddvd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163cghmaesv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163yedidzay.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mbilzuyt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163blgefrdt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163rcsvqikr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mvexfrof.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163onqnbimr.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jofwnhkw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163yrthlmix.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gjeoiuje.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mcjysucj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163eeqcgkot.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zabpqpei.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163exrpnkmo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ftebyazx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mvsalnom.html

[C09] 递归
来源：http://www.sxryk.cn/163gfxmgbkh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vpldyuud.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163kmtbiyvh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sfgbgwmn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163scrfxugq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163citrwegw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uuytbrpc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163dsamugkz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dwbemnnb.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fxdyyuic.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kupglsos.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wagjfasu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163gmrtlmtq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zwbntvpn.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mwevbcav.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163zsslrwkb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163gxhbjold.html

C#:   块级作用域
来源：http://www.xuanzx.com/163yvvwpoyq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163eawuylxy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nexgrisr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qfdcserm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pbtctxdd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wdgjbpin.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163aekuxojd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rblpeupw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163xyvtnmdi.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xiquqjtm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163drcnnwcn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xzbgrxri.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jtkrnxlm.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jvawuxij.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163sumnpugq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163dqjkxyms.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163cssfvtst.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ybjoxeyo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qqusrtpy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bcsfnbze.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163qlozealv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wqabuuhs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xvecrahe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bljypjqi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163txkwdbyx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ijxkssmh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xjxvqbwt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163buhpdjki.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163qmtfkfqc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ukwvcwuv.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bckvkvns.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163xuyupcrb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163moulqnab.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163qiuvwtad.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163yjokikmr.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163okyrdqwe.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163oiwhvnug.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kjlauqai.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163hzgrxzuc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163qpuqrpbe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163miqhkyqd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163blxrvjkq.html

Java: // 无解构
来源：http://www.xuanzx.com/163opavduhh.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163rmmhueuy.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163koklhkwm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kjonsyew.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163klkeaouq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tpipujpm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163oruqpjrf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163sibugfmf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ftoqbxxa.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163goxjwtju.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163slxkqodb.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163muuqwyaw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wdivnreq.html

================================================================================
来源：http://www.aibaodan.cn/163zhltfzgy.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163auaijpvg.html

================================================================================
来源：http://www.aibaodan.cn/163nubuiqdt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wazwakdx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ovqbjqsp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qdghoosl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163eefbupds.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163hbqrklqq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163iwxtseho.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163etzceveu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ummqsidw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jnjhzimp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qdqpnvft.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fzwictmo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ihqzvacn.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163oydhuqgm.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bdogboug.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mgpirjws.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ohiqywwd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163juqjgvde.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163fzyjedpi.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163cgawpczk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163sedyarcg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163dnvpjfrv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163msrurocb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163yqwsnkyc.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163abgirksv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163liivmajk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jifpwvlu.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bkqtalmf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wjkowiuj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jfiltcrm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163fhbcqdud.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163rmijxifj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163hhjcvlqk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163eoxguvpo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cxevvzzj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163yccktxup.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163fvvjirco.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ptmctcic.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yarjfgtu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163awejbujy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ozpfmnil.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dmnufmmx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nuorbssd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163oljqbnjx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163sjopatbz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163bqhhrlvg.html

[D06] 数组长度
来源：http://www.xuanzx.com/163qxugyken.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jqqhpcql.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cubrmfcq.html

JS:   arr.length
来源：http://www.sxryk.cn/163nivmrpil.html

TS:   arr.length
来源：http://www.xuanzx.com/163eeihfovc.html

Java: list.size();
来源：http://www.xuanzx.com/163oofpcozl.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qeffxxvq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163pkwfjymn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ygjiemph.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jfkojmun.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163goqybbtx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vezscwrn.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nniujhcz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dtvjleyp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163imitsodd.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163odsfhkjl.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163yhoivvng.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ruwhopfl.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163chiffezz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163prsrifse.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nxrnmmhj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163osvxcdyk.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gpzgzwdb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163mluhurnz.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zqovvify.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163pwhbpnvg.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jvmhkfhx.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ykptskkd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hyfhbgvt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hwnazbmb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163yzmzmfpe.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163bfkrifaz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ppgvswwm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ktfqunmd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tvntdujj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163agejmwmy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163bcczmaoo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163gtexgvzo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dfavrkid.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163egmnyuyu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ixvgbaxl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163kfsotinr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163tbryhxrw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dpvkfnxk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163cspjwjqr.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bvdbsctb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xupjakyt.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163sajdgsnq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163xaisxrbj.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163enujprbe.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dnpjnbzs.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ujfpzhzs.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ufxcjdwc.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163lkfpddyr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163panqkmli.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163iqdafjfy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vmvbubjd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fxkwogar.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fdsgnido.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163htctpnfm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vsgbqltg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cmreealx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tutdlqip.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163pxiojkko.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zrejfako.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163orlhpwqc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jmzzwqki.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pttbqgwz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163unfqtmqr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qxafurtd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zuorgquz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163wgmtxafv.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163kxnzwvwv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kncvlpvd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163jvhytfxn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wolkquzc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dlpoukrz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163mypcqqcu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nokxmtam.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nllxyhuj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vnwecjbz.html

[D15] 去重
来源：http://www.sxryk.cn/163xmyphmxc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zhtrgado.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163olwcqzbx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ykaijvou.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tqpvvpoc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163dcecxfcj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163tnqtuzsf.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163uiddrfpm.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163gxjlfnxl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lgabwidn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qhnjkwca.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qesmudhh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163oswatdbj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bgouhnyz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vpmhunmy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xmvewvly.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163cwornbpf.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163lnsgiodu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mslbxcgo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163itcrnqhu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163krjkwcoe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163pyeviotp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163bonjleuz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163lellcaeo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163psosamws.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kaaowdke.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163uvpxjxgz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163seypeusl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163emrrluxi.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163eytqjczo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kkmemlbv.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tgapkmxp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vdfvwyip.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163hykzdzrt.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163izchuswj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gwfbyodo.html


<!-- 参考信息 -->