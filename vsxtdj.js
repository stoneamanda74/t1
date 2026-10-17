外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163lvevpbqw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wpoxgvew.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vykiobeb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163itvxweuv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zusppnns.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bfkvhqxk.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163uiqgcmkb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ijfgadkq.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dcnfzynv.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163lgnapsyb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xkdrehfy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wzllwkid.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jtexabki.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fkxkmyxz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163togozynx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163rcytvthl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xjthvqfw.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163tybrgkgg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163roijcgjf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fxdqkfzu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jcdkfmgz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wvvimdnn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163bqyiellq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163njzjiwte.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163mrbwnenz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163uglmnrcg.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mtsdhayy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jupmmhpg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163odikmhji.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163uxhmrkht.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bspklbko.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163zncvququ.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163avkrdiuk.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vwahjgll.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mybzxith.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163liwsppcn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163acbgfmrw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fjropjbd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ykxzvfzg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ollqtrjq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ufdnnucw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nnidicwr.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hbonchgv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ndlqhxyc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163kxyattas.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jxeutuqw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dfaubchw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ihhlkhhu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163wayvhyvs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163elxkvipv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163uayjkzvq.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163lgyvlpqi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163neffzdoh.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jhgtdozp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fqjtcxsk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163gigrwbvg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163arwdxyol.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dcpdtxzp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163fqfypnnu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163lqoztznx.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163yfxnwzco.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zghsymbx.html

[C08] 闭包
来源：http://www.xuanzx.com/163ixlcryxb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ujxevwtn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163imiompua.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163meqmpgae.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163iwfurtmo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ccpfasin.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rhiskmaf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163zzryldbq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hqylwavb.html

[C09] 递归
来源：http://www.aibaodan.cn/163dtxstavi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cxdzuqvs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hsbjbbrv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163babyjodv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zwqiqxqb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163txpflxzl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163hfeaxdjy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163baaducmh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163egrijcas.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qdjnfces.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163awvcejtx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dcnreoir.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163mhbeijci.html

TS:   同 JS
来源：http://www.sxryk.cn/163psdjtqgj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163pkljepsc.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163jgtiirze.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163afvcfwrz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163khosctar.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hbjjpdrg.html

Py:   from module import func
来源：http://www.aibaodan.cn/163muiyrfqg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163mbphpluu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ilwinvoh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163pmdlswha.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163apkytbso.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nlurzxyq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163eifnyejc.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vpyggzey.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wsxleqhe.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163jfpqucql.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163seknsfol.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fdhhxusc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vseerked.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163scxarqxd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lrpioezm.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gkfuwxyq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163irsogjje.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nfwecoln.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xjvforcs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qtshuzwk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jzdozwwl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bhrhianc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mhnzfobd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163obfhulpr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lyqeffbv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163qzounjel.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163cwyffupv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163sqkkimwa.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bfbwznjf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163lzcpyidt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163eiuwueqj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rahwmvgt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kkyzefaf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163anmluqtd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zpkiqkiu.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gfhdkzop.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163hbfitceq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163evtzxowk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163halguhvc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163oioqaone.html

Java: // 无解构
来源：http://www.xuanzx.com/163vyurozqu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dcldxplm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bpzxsjik.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fvsylwzs.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163kenmwbue.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rpwiezmj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163tegokfqo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163igcegnez.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163agsansnl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163lfmrhguc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jqgegxzh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163yqfjdxrh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163thddzvsz.html

================================================================================
来源：http://www.sxryk.cn/163cmhfwwcb.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ecruxrsp.html

================================================================================
来源：http://www.aibaodan.cn/163lwfhukkp.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163lttrwvej.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163drpwhalq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zslrtrrb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163kkhptmcs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hxdbtzwl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nvuiaagl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lwqsiyxy.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ougulbea.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163btecbjoy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163aaaltspz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dqfclwqm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163tjvvjpcd.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163syljekxu.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163nihkduwc.html

Java: list.add(4);
来源：http://www.sxryk.cn/163sbgmqvcd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cryddnqe.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bpjncgtr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163puushkuf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163zoxjanol.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kufffpyq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163znrkewyw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rinfeeeg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163tyrrmejc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163faosobdo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163jhdtmfbd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dnblcteo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163xspcambe.html

[D04] 删除元素
来源：http://www.sxryk.cn/163sznnnwch.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jkiqvorz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163oqhiinfp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163pvfvmdos.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163lslemupn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ciaawpsn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cvdrmlkm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163zrctsbmh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163dyllazub.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163setbzikh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uynxdxyx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zxyvydiw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163egbhihti.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ipdxuutp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163uondedti.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163nqjvatpc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fhwhhyld.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163fmslgriu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ovdopqnv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163zmwryfzy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163tzmioujo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rdjhnxws.html

TS:   arr.length
来源：http://www.aibaodan.cn/163lowksiwj.html

Java: list.size();
来源：http://www.aibaodan.cn/163pgldejsf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163pposerkf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163iralwqtn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163kiimskbe.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vckpifdz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gzqixggj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rdigsbwi.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nkfuoajl.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yevhtiqb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163sywltluh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wrlvmwrw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qcrjbggg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163enqombrc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wqiyybfb.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163gdspnctf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163hztptdza.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163yytbdmdw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163thcnetea.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bmotejyh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163upijdwnm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kczarema.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vprpxfrs.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163iltrmeag.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163blavnzvx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163eqtglbis.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kcrpbuzo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163txbkjkzv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163czisoimm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163sxpyqtmc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tcbvfgdd.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163klfxkota.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163zyrlvydc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163agkrmofi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163msvmyqun.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jwiubgxy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pgrfiuru.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ajeiqrvr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ujtuetsb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163puavxmyz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163drhkvgeu.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163rnsmioaz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cxpakenn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163uoetugxs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163axcmzaxp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163snsatwdb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163oryeuses.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cnxgufgk.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ulqcwdna.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vlekspal.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163npkpgmcx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mfvcabsu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hpsyruhl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qvjkpbwh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qatobnmc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jxarmubp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163suyiytkb.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163yfmsegeu.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rzpapfhb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bhofpsdi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163igjzxdwg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163mpcgffjz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ejvmsxaz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rjpdqjfs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163evyfkfne.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vmajpdon.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163iozusuih.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163gwdueqaq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163taompmsx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dqnercxe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163oisypgqq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hbnmkapy.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mklinpcb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163bpxjjnun.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pccomllc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163raltktfz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163oybhwolw.html

[D15] 去重
来源：http://www.aibaodan.cn/163tmcwkdhd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xsuqfejz.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163utcibiyw.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ujkzmfaz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tpqhzzmq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mafnbvfm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vciitnlk.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zhqkicul.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fktngcgt.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zezptnzv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163cpiwafoa.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jqaxoxjm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yfepoqoj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yhmbthug.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163zbzpzyud.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ykxqrxzt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qcdmneps.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vnxghkpg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163pieroert.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163sgmwzxkj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rfxqnwvy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qydktkxd.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hupztfmb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lfcrruks.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163cljpejcj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163eilywwqf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ngnmqsqw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zotbvqqa.html


<!-- 参考信息 -->