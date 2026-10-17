外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163fwrvziiu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163chubpvxh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zpikqkbu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163jsxcusdj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163sisivfvv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xhehfair.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163hzywiywx.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dlplqozp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wniwdnhb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lctcevfl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163wtfkhika.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jnpbaclg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163nsgaccdo.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jfmbmqbp.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163blsrhlxg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ilqqedbp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kmqmdjon.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163egrqjluz.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vapiynsq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163giohozct.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wyzsbujq.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163aoqaghmm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hhfpxzyk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163tkbnwygm.html

================================================================================
来源：http://www.aibaodan.cn/163ajxbrrsh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ydhazwge.html

================================================================================
来源：http://www.sxryk.cn/163nvtauuqp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163atebmzga.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qfvhwdur.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163aupdoplp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bodsvavg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163axlvkiep.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wqilsofo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ofcrsqsa.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vikynjoh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dovorocb.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vbqdionv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tktlakcg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wzcpfehp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163pvmxajpx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rlglnhim.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163zunruvfq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fkustxma.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163naerdrrt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ijbfxbkm.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163roefdjor.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ynhtuxgg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tavkuxes.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ciqahbhb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wjtkfpaf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163jlhdxlef.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163jjvljlwt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pilwdsbu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ndvwxnea.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163elukyqxj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gulyatwb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163pavupzlo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163eojdkjux.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lwfivoce.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163toxmxede.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163zkbmsiyi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vrkwzgaf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hzcpdjlz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163azndvgvb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163nxfvplos.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163toszkcqj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lovfqcft.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163zzqxqtgb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163tookvade.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xixmehcj.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wusgnycb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hgdnwmqf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ehxzrblb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163zlrobodp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ivogqnsp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163biojbfwl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kyypcfxb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kfcxwpil.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lmiecfux.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ksurbqxe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163pbfiryyf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163lkdqrfsd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163yitibkwn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ufkzpycb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163owsnuvqu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rerkgjzp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163uffgjqko.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wjnsqazj.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163otadqtbh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163gyiflnyd.html

[C08] 闭包
来源：http://www.sxryk.cn/163qeidkdfk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163pnxokftp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ploizpdf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gncoafgu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nxgsfugr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ooulavxq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163jqktqibm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jaaiexay.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zhalrbus.html

[C09] 递归
来源：http://www.xuanzx.com/163kjnoyfkv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163umfnvvcj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gnnqthfn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163askrtvdd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ybfbkbcc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gsmlxjcb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ftoiieyu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ubanhhmh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tnyoyrss.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163fujmzggo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xndqukhk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ohgrpczc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163bygxgzyq.html

TS:   同 JS
来源：http://www.xuanzx.com/163kgicnlsd.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163pmbdpygr.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hocubvoq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163khjwqzrc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163wnykspqj.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163xlrpdrnc.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fmfyxkzu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ofeboytj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rfnpudpd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xikvmszy.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ahrosyjm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uabrzeky.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163owbmcdai.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bqemebks.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dgwhcrfi.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163udrirtog.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163kxkfnytz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cyfgoyir.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163unqgxfcq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qzryldvp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163esdsmhaq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163rnonnrng.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163llzvabsh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163isqhpjaa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163nvnlxvcm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163swakljba.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163oxsqninf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ekovzofi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lmjwwkqd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163tztfhlkp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163rdhrfwnm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cpjfvzsa.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163zizmapbk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rmultqim.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163tgticyjh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163fhgyiyrq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163gtqbmaaq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qqapqlwm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qtfxozaa.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163amzqcqeo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163wewpbrxh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163wdvokepg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jsytrvng.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zgxrdenr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163kryfbzqc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163pdilxjkn.html

Java: // 无解构
来源：http://www.sxryk.cn/163gowtiwlz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163tziiqjbm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163gqrakghx.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163vofinwxq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qwrjjktf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wjmdkszr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163btqytbdy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ojjrpsaw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163uykuyzol.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163qkpgqili.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163teyhhtyr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163eovlysab.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163evmbhimn.html

================================================================================
来源：http://www.xuanzx.com/163etufknwe.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mwuxudil.html

================================================================================
来源：http://www.sxryk.cn/163egoejpdg.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163iidirwsm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pyhpuzzy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rorghbjn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163nrxzavfc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163zubbtdlo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ndpbhunz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163nfpethqk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ciyzfhfj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ghtaicis.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xibsoytx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163vhbouyyw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163flomgxom.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jqekjczj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163nnbgmmqg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hmatpkhz.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163jjxlkbmp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163zndcozxh.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163bjxcxput.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163dwtjofks.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163qdcvkebh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lbcyjkvl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163etirrhkc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163yjobjnja.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hdvdigyf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163mezpjkkd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163gtqnpjcr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lbtqcrwm.html

[D04] 删除元素
来源：http://www.xuanzx.com/163veaodxbo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163rsdodxep.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163sgbjvyez.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pbiaqkzk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163taqrbgik.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nyvnohco.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163auioahts.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163tokfnqty.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163iimojztz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lwfhrkad.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jfjhdwko.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qajhpaan.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163yicgzgmb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163blxinfiu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163wopctele.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163bioyjzcq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gliijutm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ataulupn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163zlblzrpt.html

Py:   len(arr)
来源：http://www.sxryk.cn/163itgyzbpi.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163jbzhbwit.html

JS:   arr.length
来源：http://www.aibaodan.cn/163exlgczol.html

TS:   arr.length
来源：http://www.aibaodan.cn/163doxikfnb.html

Java: list.size();
来源：http://www.xuanzx.com/163tnvzftfa.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vwoskszd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163cfronesd.html

C#:   list.Count;
来源：http://www.sxryk.cn/163uvjwnmis.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163bbkyycqy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163pkrbhtsa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163soiovqvv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tujpnadz.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163apiwyggf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jqaeedds.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163mwvjwqxu.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yjvjxcvl.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mmxzwcfu.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163yopehcgl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163pjrnlmvo.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wujxtnnv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163nmuyyrfo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163odkzecxb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163hnlrxlvh.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tgaxfcuw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bvxbesqo.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163gncaywge.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163cpmeelxa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vuckljev.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163zjcwawlt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163uozsqlse.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163wmmpavos.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qahuofkm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mygmjxwz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vtncpskw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163wcwobghi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163shoqqrjt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163lrvvzfzt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qhppbopm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163glbpvlxv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gvzaiilo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163bvkojgxf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xyrrjodc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163pamtkyja.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163mjiszobg.html

[D11] 反转数组
来源：http://www.xuanzx.com/163gqvxgcvw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jasjxerf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163czxqhujl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ypztnbgk.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wvuxsvor.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vyspywny.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163daittptq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gosxloyb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163beeiwkrl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163oiswxvto.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163evzmiesc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163nanvblbv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ftddbqqq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163iqgtuhiy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ecceagck.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163htejpown.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163stodkfuh.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163yijjniwc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ararwgeb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163plinopcv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ofcgwbjv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jguywdqo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ullexbop.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163dgrfqdjh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163szvoqmwm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xqbygeup.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163dhttphmf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zttchpaq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163alvdycdr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163pxibhprq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rfabvlux.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kotfuosw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qutlhjyc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mvzqmjjt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163hsxphrsh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163boddmtec.html


<!-- 参考信息 -->