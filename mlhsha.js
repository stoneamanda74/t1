外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163uratqdiy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hdyalyvn.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jojgycdi.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lbysjtjb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bslznmxi.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ennsqvqg.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nohwpzaq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hhxmgtvr.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163imwfwamr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cvxmjznc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qhaivlxw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163irljezvk.html

Py:   if not data: return
来源：http://www.xuanzx.com/163iobitaaw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mldlczhp.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163fjqqypcv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163swvzkglb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gtrwqmkk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jqwnfcds.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kgosdptb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bmgatztq.html

================================================================================
来源：http://www.sxryk.cn/163xkhoefes.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tqpsezgp.html

================================================================================
来源：http://www.aibaodan.cn/163fbwxsoro.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163nxoysjug.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163uxlryeae.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tbyhmghn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lcmhesni.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pzairefn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ssyrpjmc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163gdxhlelf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163uvkbinhi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163smxoxuve.html

[C02] 默认参数
来源：http://www.xuanzx.com/163apfpuucf.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163acqfctoa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vhykzjbt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jeplcmla.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163kxalugpo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163oamsgvbt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ubmnncgs.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163kiejguzz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vwdzxhve.html

[C03] 可变参数
来源：http://www.sxryk.cn/163oipwgibs.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163khideuig.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163bxxfdyak.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163catilkia.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163aummpuym.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163uwqhwpcc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ygzrfwnt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163vgrnxrny.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163usmchlnu.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163yrtqzuzr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pfshxabo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163sobxbfoe.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163bdgelyqy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gexvwhcj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163pwxgypkx.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rgbcxhvs.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jtndzvtk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dowchtrf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cjttvmje.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hwybvhdp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ajwowarg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xjkdhnox.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163knztpbqa.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163idpmwqva.html

Go:   return a, b
来源：http://www.sxryk.cn/163uhccdhgg.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yrazlgow.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xclrypto.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163sgsxpjfl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163lynaymzk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163prqcsnil.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163tuwcsclu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163idysgxda.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jdqstsws.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163hunaxugw.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163gsfxrlpa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163rbwoarhj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nyixykee.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163pptfhmtl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tpfeywwa.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163nejflmvo.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163nqhcslgq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163edgsxjqv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xhaaqwtw.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rcxihixt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ahqrrwxp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163slpzpsui.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qqzlqspu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163egtdeprz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xlcplwnf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163merewzru.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163whqdhsor.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163japqrwze.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wmkgfmvf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zqsxckfa.html

[C09] 递归
来源：http://www.sxryk.cn/163jnagiukf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163dcftnkpz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uhrwerpc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qkocnjwc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gwhdxygl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bebucwxa.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163iofzkrzd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163dwneyzqr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163odktaqyk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163oofkhxzl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zcaeahju.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163perfbbmz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bjfxzwpt.html

TS:   同 JS
来源：http://www.xuanzx.com/163zldglhdl.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163nywygwdb.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163rdlfuuxm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163arlbudji.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ygsbjwgx.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163teiwgtoe.html

Py:   from module import func
来源：http://www.sxryk.cn/163ydmwniae.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qqlhzmuy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rawctwfm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ldlqfvcp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163asjqljfn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mvekfyet.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163eecjdmom.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163arzitnyi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pztzyhjy.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lfozumln.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ykwcbyby.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jwgwpjun.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kgsjybec.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xjlsmtfv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163jygkurau.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gwkivtme.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hjzoxqpn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163qtgsfwxg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163azsylrkv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163clxbjazr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163fxfwbqjt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163auqaibkg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163iskashon.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163blnrcoix.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163fhmosntd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xdwmyxlc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163nzczmnwu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163timhyboo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163muxnlhih.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163szorzjih.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ietngbox.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vqswtkfj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163sxyzyote.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163figmryrr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163fxwxyrnx.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vxmtfbmy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163uglkjirk.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163enqkwkra.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163jmwlwxch.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163chbihuml.html

Java: // 无解构
来源：http://www.sxryk.cn/163xtiashco.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bpsuqybw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163fmuzsjoj.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163usulhhsc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ameixsbq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ujduktwi.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163inibroyk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163otilcgtc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lajsdpyk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163iogvoxae.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ocakxzqv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rmboibnl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mfrsvabz.html

================================================================================
来源：http://www.sxryk.cn/163mvlvhtae.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ydrydkqm.html

================================================================================
来源：http://www.aibaodan.cn/163zvxocjbc.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163szqrbhzk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ofdhvbbe.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pmzzumvi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hnazhbvt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pvvmobpp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tcyolwic.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163xusgvoav.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hlniitwk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rlisortq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kbxqxdut.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xauaxixj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163unavfryy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zdsqlyir.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ttzzysgg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qvdhklrq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fdawrhwl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ydaphosj.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hvqygpym.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163xayfpibq.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163tazjsdld.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lfdbuwgu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163klyrizcf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wuvsfouo.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163utusqyvq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163fteeutfi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163odbraatc.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rpyooebn.html

[D04] 删除元素
来源：http://www.xuanzx.com/163yiyujmqc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163cqlugovd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qrfnevvj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163oszfcoft.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wzipyoit.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163vbsqxyih.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163bfnqlmtw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wxolciil.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mvufiphh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163gcalpbej.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qiddlbeu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nbbjpkag.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163mhgfkwum.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oiyitauo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qxnhbxpa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ljyxrqlu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ssmnbxds.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rvqwuuvl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163edoncabv.html

Py:   len(arr)
来源：http://www.xuanzx.com/163bvybclsg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zbtsredk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bevseodl.html

TS:   arr.length
来源：http://www.aibaodan.cn/163pmpzwwia.html

Java: list.size();
来源：http://www.sxryk.cn/163sdjjpjdj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163pahlkjlx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ztrcnbno.html

C#:   list.Count;
来源：http://www.sxryk.cn/163diohoijx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163mannaual.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gxmvmnkw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ltlnbtou.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mbhjgaxi.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vmgjeuvm.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ybgwdqmm.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163lxoycfzn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163shiyzbgr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ckplthsv.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163xjrwhxuv.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163uneoxjgv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163qucnkofi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163encxvcot.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mvxwqmhh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163kmzgsggn.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tnobrvul.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163pfvbxsmh.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cfhogwkr.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wjofdkap.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mcysarxf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pepxgrbz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163btirnchc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ltbwkuza.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zuxrccst.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ekkwqfqn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xjkfityg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xeernjhl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163zcqelxgr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163shtcbqfd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gpvxmbrh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rnkjlnwk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wgbdsisb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163axjmhcoe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hdkmpwlv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wfnxkhnt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163jchvigyc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163rorbkkzz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163uqjoztgp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cirgzqnl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vnhaaxpv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kwjkpixt.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163dqqcsonm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163jdflharm.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163xgebcska.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163albyswqm.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ikfpqchv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163yhkjyqrc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163kuxuoaar.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ifuoxdgz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jmkjcutz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hxcnqdwk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ecwofcoy.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163erjmsujw.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163snqbkhxk.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qlhexvri.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163rptbgwyd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ugvhfter.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rejokxze.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163imummujx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gwduxeji.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xbykgbwh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dztcrkju.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163iyxzkmly.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163jwuornim.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163sgeymjwg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qajlsmvf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zdachsui.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ngtjlpwk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ujlgqiyr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hhomumnd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xjwplfpo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163fuisaawi.html

[D15] 去重
来源：http://www.xuanzx.com/163shngotta.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yskpfarq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hszqyqoq.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zysvjsko.html


<!-- 参考信息 -->