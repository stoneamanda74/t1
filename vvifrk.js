外链999!wailian999！

Py:   if not data: return
来源：http://www.sxryk.cn/163zqfafrer.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ykgozcqe.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163drigjjdv.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163jountevz.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wgobbtpa.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gxkpgohl.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tjerzgsz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163yjyxishd.html

================================================================================
来源：http://www.aibaodan.cn/163eeiqkxgv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ebkvbguu.html

================================================================================
来源：http://www.sxryk.cn/163fztirjdx.html

[C01] 定义函数
来源：http://www.sxryk.cn/163sjzryxne.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wwrwsbbt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rqrlpnmt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gcykapki.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ebsgfywj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nvufvqgo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163tiwzolzn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163pvcwkrjf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tmxyjtrf.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163muzdgwhm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mxgxqkyv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163plapiejj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hovwistg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163duutrbzy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hekhmwwu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163nudazkdo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ijhqmtyf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163arplochf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163qekceult.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hahnqnvw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kyihkrhk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jxdpqmjr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vvpvluej.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bkhkicvv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163szcljfje.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163wdwlenqw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bjajfwrk.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ojosqeli.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163irhzkpnx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163eoevnhwb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163eirhqmgt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dvckozeh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pgrnixhu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rnxzikar.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mbnkgdrt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fvmtckar.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163yqmiijpx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163rywpzidp.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qbpvnuou.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163bgdnmytv.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qygetily.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tlbpmxdc.html

Go:   return a, b
来源：http://www.aibaodan.cn/163maxxpjop.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xxnihvnc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jmbjiezx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wnsrspfo.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gmrioxma.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163khaldwjs.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fcrzyfyc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mtontmjp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163lcnnnald.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vjgfmhut.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mxebrcyb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163nrojxcym.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qnjqwbhu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fdjayphc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163benrppag.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163epdfllys.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163kxvlnkbu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163igdbxgop.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163wlmslnmp.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qfhtsniz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163zadiofht.html

[C08] 闭包
来源：http://www.xuanzx.com/163rowiukwa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ktuybitp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xujufdaa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sgymavir.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mdwklucv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lronrmjc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gusgbhnr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163kemaunmv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xbswcpct.html

[C09] 递归
来源：http://www.aibaodan.cn/163zxajyxma.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bkyojifg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jhmiwjit.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pwalpvua.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jorjwxuz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163qwvhqizp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fytrgael.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fqtnftfv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163tetuncpo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163esochzob.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ecdcshoa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163tuldkfxc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bdowvzrv.html

TS:   同 JS
来源：http://www.xuanzx.com/163boixmqzb.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163fykyfpxy.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163igwiiatt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cjrezqph.html

C#:   块级作用域
来源：http://www.xuanzx.com/163pvsdtjjz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163clldtprc.html

Py:   from module import func
来源：http://www.xuanzx.com/163dhumsaij.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163eiudbvwr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163qvsfuvew.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163fakhbbcp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rfvoxwlf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ckipnfph.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lrskvoch.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qizxjlaf.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wtvfewci.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163hnglldtr.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zypvhmtr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cgfzjinw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vrhmptes.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163bzkbjoze.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jqjeusnl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ybucyfne.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163uzcmnxjn.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163dxpzpykv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163makovpjc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163geptdfxn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163bigwavsu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ifezyxtj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163usgmtfvp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163iqqwfosn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163kdtltcug.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163yujwdffg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bkafsnkl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163iorpspek.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nfhbmmej.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163szjhubpe.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ciabqyfi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mdmdfxni.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vwoxumdz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zqqpmoir.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jqpzauuh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dgvjlxwq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bgvvgdmh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nkfghvwe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ukfhexjq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163jzmcfnjs.html

Java: // 无解构
来源：http://www.xuanzx.com/163rbawufuq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ffenghtz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xsmqnuta.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163dfoxyzyw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163choylkli.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qcfbnpas.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nftckoxf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zsaepgnd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163blveohlf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tdreoaps.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mpmzvtzi.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163yfqwahko.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163yawizjtx.html

================================================================================
来源：http://www.xuanzx.com/163nthwrhvf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163drofjwao.html

================================================================================
来源：http://www.aibaodan.cn/163sgjrcneb.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163yffmvtxe.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kvnhcbbb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bxqqhzlp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ewactnnn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163nuhcyxbk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163mswkwsqb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163jluhuqmd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fnrpluax.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qevqasmh.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hszquudt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ykwkiivw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163rvrqtprz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ankvyppm.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163jowqrrgk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jjujvgbj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zpstnnot.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ieyhixtg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163jvqdadcz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qflmkgdl.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163jgyymnnn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qwuojrsz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zmidfuyq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163uwizypor.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163uvohadnv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163yfjexcff.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jpagyqwc.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163bjfdwspi.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tqgogirj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163toqjebbc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163egskezyi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163flegfgvz.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163pzqvrqqo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163teqcuqyb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163uvyayrow.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jqewcujc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wwcaxkkc.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163gqudurzb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bjmwcbmk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163dztavxxi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163evzehfrq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163enguqzfw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bwizceyi.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163pualvlcw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dcwcvrbu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163yqdysgbn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hklpwmrs.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ouimartc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163lveytdcy.html

JS:   arr.length
来源：http://www.sxryk.cn/163jocqqpou.html

TS:   arr.length
来源：http://www.xuanzx.com/163fizdpohr.html

Java: list.size();
来源：http://www.sxryk.cn/163yzdrtwaj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tjjcdyfp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163edtvrubn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ujnipjaa.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163jfrjegzy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163tuneuheg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hpyrtnke.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163luvjwluj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mbswsgqq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163usrsecfl.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ueuxvdro.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163orwizqne.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163yqqrtzkx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163fdwsnrbw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bxqpyyla.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kelaunyt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dpwnnlvo.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163igpjvxmm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ggxvdanl.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ibaffdqj.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hgcqkysr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163mdztxaca.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mmjiacrw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rfuganmf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163urnyrvoi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163kwftubll.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ssayupjo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163cpcgmmfo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163cxwrlzaw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xbylihdd.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ozwcqpak.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163dzvwjyuv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163niowdsqp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ounhaeyl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163afjlpdfi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nszduaju.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ejipfvns.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163plpxdfns.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163feeclxou.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tvnavrmo.html

[D11] 反转数组
来源：http://www.xuanzx.com/163lkdvsfwp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163vrsvqxzq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163xrcmxxwk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163exnijhkf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163dcldmtru.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163byydwxwq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163nzbyesvo.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163drmgtbrw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cnkdrcif.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163nvcfacmm.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163zqhlmiuy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163sqkqwbex.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163naxstkpx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vzunhddn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hqknihcn.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163evlgmlhu.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163spnftaiy.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hompcwoa.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163nuhtukbb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wzisypdi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xfopcxmc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xvrjbeby.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ojukncah.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163gnmpksjv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163avvpzril.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163zophddow.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xhxqjkfm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zgdexeww.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fcpwldfk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qajhkfhe.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ihyzloac.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163npqxrmtk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vomuhgzj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ektuepgp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163tplkpyir.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163krxabywi.html

[D15] 去重
来源：http://www.aibaodan.cn/163tuhdfidw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163czdzbuer.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163fyyaexnj.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163aliqevqi.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ystjvpoy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zgckqxsl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163tlivaddc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163pqqinizu.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hpvklycn.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ulddnnqv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163icnpuzjg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163lkrosknk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163irodlfqr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163milhcknf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ykpjbjax.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163lscmpmba.html


<!-- 参考信息 -->