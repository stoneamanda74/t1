外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pskibxrq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163esfcgdkw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zvsfhldp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163issvssxi.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qcwefhsk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163vpaaraji.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uxjvvnwn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163btfozrxk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xgpwaobo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qecvilwg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bizckukr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vvpuftir.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fuhlirzp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gzocuygd.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xndxhmyl.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163vywjmagm.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163aoclomob.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163sbqxyhmn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qqolyshf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fozyjmlo.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163smvoapmp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163sizyaspy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163anzzjgju.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163tyjmkkbm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163cwubfcju.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163grxfnlsd.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ntehoocp.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163uyouayxc.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ukvhuloo.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wuaohtjm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163cesjbcgg.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rgsboija.html

================================================================================
来源：http://www.sxryk.cn/163holvdbct.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163urqrnyth.html

================================================================================
来源：http://www.xuanzx.com/163hcctluws.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163jbvhdiph.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jembfcoh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tmuxxore.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zabcvsph.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163osmuwazy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tmkuplww.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163kkdjoqwb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163zexowhyx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ogvhvmbx.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ciirifho.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163yaophmrf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ainbxjvp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163uihgmtwv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163eepznwok.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163dyuubtjx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xlvedfof.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163bnqfanrg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jkxmdtwb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163vzptlozx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nkvccror.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163vcxrtthv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mihijtwy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gsvgfenu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163djyzeyse.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163mhagauic.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163joqlecco.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163byvwtvbg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dpdyjeli.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163npphtejd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163uhjfiknf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163jyzrnixk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ylgifkat.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163guzpljck.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ewxiupnk.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rcyvnvoh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lkyujqdu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pzhyivsl.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lpjxxted.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163etatrsuj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vavpjfsi.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163phcjmwwz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163pqndaoon.html

Go:   return a, b
来源：http://www.aibaodan.cn/163faqcpdfa.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ikekfxyy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163grrusosv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wqbkgnjl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163yvjblewl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163flueilxr.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163svuzhedd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163umcdyvdf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163asctqkbk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bcdvbces.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ewnkkwbb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163tmwjdfih.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qneazmha.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xpfkqzzq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163wawjwzms.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jnfasdyq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xykboaoc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163woqslrux.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ckzjeayv.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163boemaenq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163zjveexps.html

[C08] 闭包
来源：http://www.sxryk.cn/163lnzgbqfd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qoqgluol.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vzwmgaax.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wwmbupgo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163euvuzzdd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fpbgfevz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163oqiwltgv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jaxacebm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wcyevuos.html

[C09] 递归
来源：http://www.sxryk.cn/163wffzahwa.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tqwueqrr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163kwvmuocr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xxxduobz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wgoljtlg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mejyrhta.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163kcxpopxy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163euqkuyss.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ksejsxey.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163sxnpqsmw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163icjgfkfx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vpunkwtp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163uhisrraz.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vznwunrr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163sdldprdl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163livpxtxg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163kvshnigu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163usuxnbcg.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163towslfmw.html

Py:   from module import func
来源：http://www.sxryk.cn/163wpkolxfd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163mkfeogwr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rfibpvow.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163frzsjmnu.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lbwghxsu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163tmbxljxs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163txudlsys.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163gjmxpmjt.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163kuzbuygz.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163alhbbonj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ntibfwoq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pdtrjyal.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163txjkrgql.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163faqikwjj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163pchlaazg.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ptbyiyfo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163memzcckb.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163szzyqfbh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163iwtlbmyd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163adkljaek.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ibhmepvp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fwlbkckq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yccsqxki.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163crasjpye.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163iyrmonlb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cpvztdkf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163gtkvbdwj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hbjxaoff.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163oyinznbb.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tpkqjwuo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163coandefj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163dsxujdji.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jkecnfsn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163puyhbkwe.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gddzwzfh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jsxlkjid.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163yjytzwcy.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lxsltizq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ekbxbbir.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ptaijgyh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163cmoamche.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kimtenuv.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ynjphwwx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163eazdvgrp.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pxdvbbnh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163kkwjiiyq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jsqtiyzg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zqbgwbel.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zxdttfdf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163srrrdnot.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163htpssaox.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xkcssebj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163kzgpichj.html

================================================================================
来源：http://www.xuanzx.com/163hdzdzcho.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qjidjutk.html

================================================================================
来源：http://www.sxryk.cn/163fhgpfpml.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mljhwkdh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wjqxqpcg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ecplxbly.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ipbtjeit.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lijfyzux.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163awjogcrs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163jqjsgpjo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ojuxbnrf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163thoighxz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163bwzruzep.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ghivqnjq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163tpabnklv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tspyikeu.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163trmqrjxc.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163wwgowbsk.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163leagrald.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vnwizaue.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163djralsnm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163wwjiscub.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ikjcbxll.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163llgqyayk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xzpciarf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163kbfkjwmo.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163loryuziq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nedxbufj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ztqwavhb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163unmlzqzo.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163oaprcoio.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fvxdkcps.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ydckbick.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kvupaeac.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jipqpimr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163liaqqejb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gcjfzvta.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163spurdavn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xkktlaxm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rgntdezz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gckixtuw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xuoxoyek.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hsqyknab.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ynfirqyo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163zctffmua.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163kyirqxqe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163epqttdem.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163znjldkee.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163uphfmmxh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yssiawly.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163fbtmbacb.html

JS:   arr.length
来源：http://www.sxryk.cn/163azwovfbp.html

TS:   arr.length
来源：http://www.sxryk.cn/163nmugvtmx.html

Java: list.size();
来源：http://www.xuanzx.com/163dlrcmrhc.html

Go:   len(arr)
来源：http://www.xuanzx.com/163uuslklbc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jheeqeci.html

C#:   list.Count;
来源：http://www.sxryk.cn/163qfsghzxu.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ydlcllvr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ypfgvfvr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163czbhlhre.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bcikxtev.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vyzrdxel.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hxmdyzgp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fcsxjmvt.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ievtjvby.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mbgxlgsp.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fpjxyrxl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lnadgskm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vxwtfgrl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163yyftntrw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dtsvbwjh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163mfapwubu.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zvxtrgta.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mjhblqar.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163fppkstuk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163gbdzhrnf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163srzvvuki.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vokebvhe.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163kdzfuooh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rtybsknh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163nrvezims.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163uqhmttlo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rtsakafs.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hggtwhjw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163bguyoiwz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163fosrmllb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mreravvr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163itkkkahj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163abancwjh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163blqseaba.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163qhhhhoen.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163zjmwjtsp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163hyxxevfw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163didsfhuc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vqjjrpyn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wbgfeiho.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163cqxwvhuy.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163gcfvmzly.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ewaehgrf.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163etqrymxp.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pizccysn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163srrcxith.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163pboienzn.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163hxxexuwu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mfwfoawj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rrzjejyc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ummlpbze.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163yejmuqgo.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lsokbtyx.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xtmbckpr.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bsvxokod.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lnlxtsoj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fbiviwcp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vguxolmk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vfdynkja.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tscvfqry.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163waiyitcd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163zmmysnkt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tjqusltj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hbyckhpz.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163wrzszzka.html


<!-- 参考信息 -->