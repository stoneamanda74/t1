外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ptezoqeu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cxzkejvt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163fysiamcv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xhnztzly.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gckprwhc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wqirrtna.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jxcmzzoi.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jilweybp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163mxwlvhym.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163afdplrsz.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163onbmnkzx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vnyoyyuu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nawjhjdc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tefbcgnc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163weatvzal.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163urrwjblx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163faggcnej.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ylhrzrel.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163yageewtk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163occhjyzk.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163shdtcdrm.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ywnuzwww.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tquqrioj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ugjbqtyg.html

================================================================================
来源：http://www.sxryk.cn/163gdifjlwy.html

C. 函数与作用域
来源：http://www.sxryk.cn/163cdmffohs.html

================================================================================
来源：http://www.aibaodan.cn/163cyrbueet.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qfinxcxg.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163jpjnrswr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ebjxnkxl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dahxswfy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xtzlmvhu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jeaeotyt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163wwelavgd.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163etoglhpn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hubeznjg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ggszolqi.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gvvvalle.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163epvglxtr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163fdltooyt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zliodevj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rfhmfvgb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163nazsodlt.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fliwwdxe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163bbrtkzkw.html

[C03] 可变参数
来源：http://www.sxryk.cn/163txjogzve.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ncpgwink.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163nmwpgvyn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ppppyctf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zdmpbtzf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163imwrghxy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163pqzmzuoq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kfmubpag.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163uilnoufp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163njobhxcw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qbgmlsbl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tcowzxwo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xuewphhs.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163xecclvvg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163leygwbff.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wfkkfvag.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uhhkrapf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163udxfttlh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163bkyqhqge.html

Py:   return a, b
来源：http://www.xuanzx.com/163qzobwvov.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fehxvfih.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ydxdmnls.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kbeujcrz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uxrdtrfb.html

Go:   return a, b
来源：http://www.sxryk.cn/163rgpqjtns.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fhyyucnz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163zwhywblq.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163chhkwgur.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kfcgnyqc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xsmkottm.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zozdrddq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163kjwsgjnw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rzliaxws.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163yyuubiaa.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163itcgkpyn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tindekpe.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ovrbyaqt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nrzyoetj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163twehkemy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xwdpvcoj.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jsxcgyhd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163qadwxrgg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163krbncgbk.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nkktxeio.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163gnrggsov.html

[C08] 闭包
来源：http://www.aibaodan.cn/163thhsynif.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ucvfccgh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wetorffu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sohhgaqx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mubzinvc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vnaobtym.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163owajfghv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jjeyvvyo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wooncyjq.html

[C09] 递归
来源：http://www.sxryk.cn/163ofazruba.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ihmibfeu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bpfmevfp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163duuwueih.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gqjqpyxb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bbvkqqkf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jmwozelz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ghzidisi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163axgtllvg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163nkdqbcfo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vavulbgm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163tizbqiqr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163chorszqd.html

TS:   同 JS
来源：http://www.sxryk.cn/163ikpivnbp.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163oxhjhijp.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163enrtjoku.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cluzfegi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163aqiiumzn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tmpdiibt.html

Py:   from module import func
来源：http://www.sxryk.cn/163spyyuhta.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zwwjtpgy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163asodwbdy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cvwzjwsd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zfgnooig.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163tnwdypbb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163vsynmavy.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163aeunxpgw.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ccazrnpv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ntzznhfh.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163cazwmqxc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vyfnrlyw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163urtjjduv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ediachhw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mfkjoytq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wybuamhd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mljndtip.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163bqqjqmcv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hsadupgb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dloutxpx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163peimjawa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fergeyir.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jasngbqq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ytxqldrm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163yvqxyreg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163cfraqzen.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163pwsjqkoa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gnsfifgp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163vyctoyhw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163aizoscom.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163djppalxz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163jyaccjry.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163avqmvqkz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ttvfxoif.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bdbjguwk.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163qijhbrgz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163egvufjqo.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163niwqzebp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pglqyojd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163mirczwvr.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ucyrtcmz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163msdvensp.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163njdmcszb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163cpviosxt.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wlmlzfkl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163gohwtjtp.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163nrksvgup.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163pvuugwro.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163iszuhcef.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163dkkybkqv.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163anqnqwkp.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vfrfdzce.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163atumsser.html

================================================================================
来源：http://www.sxryk.cn/163lywybyon.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163znmujwga.html

================================================================================
来源：http://www.sxryk.cn/163uvuhhkht.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163lulerpvv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rtfqfbcw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xtdvtdoc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163talvtqjf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163bmaydpna.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163deafpihw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163tvvufrth.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vclhbulu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qsvtttsv.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qjvtblaw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163bgnhxvwi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163uujbidii.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163yvqudpcx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163aunizdki.html

Java: list.add(4);
来源：http://www.xuanzx.com/163mdgprvdy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ibcvjbew.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163tgyemuoa.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kkhzugwm.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rmddpkbe.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zzlaifxv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163iqijtewj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163qlyrjssx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163sxpmvdfl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fqizgtnw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163idnhkoru.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ermzamte.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163krydsbte.html

[D04] 删除元素
来源：http://www.sxryk.cn/163blmqtove.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163spymlpye.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163rwikjhee.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jhbyeegi.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ekgayrah.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jxztjkoc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kyqxspfn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qjwzpdxa.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fdddzxyc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163pyoaymfw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ibjceadi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163caodzqdc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163cvkspgjy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163aycwdody.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163pvgpenfo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163abwecshg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xbugdsfq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163azsdrjmk.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hyzhziaf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ldlppznt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163nbdodrdn.html

JS:   arr.length
来源：http://www.sxryk.cn/163dxsdsfhp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163yeefvhkn.html

Java: list.size();
来源：http://www.sxryk.cn/163huiuveot.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vpdwydcx.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163aewlzexa.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ostlgmwm.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163puihvsgk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cxgycosp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163clzppfxm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tdeqauuf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kduhqpwm.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163dzctigrm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163piuxfjou.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zbajebbe.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hokiwgjd.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qalkteeu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163zfpdfota.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kuivgxzg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163kwtcwvpt.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fvpofsdw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zwtxiowo.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163lwxtvexy.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163frnxcstf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ubizjkhm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163thdmjxhr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xequufcg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ybhfwihs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163dxuzibwn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163alftybaf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zjzagooc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163apelepck.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vwgrdiwz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163haqqmtfo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jahzkbpu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163sjkvryeb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xfjjkowx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163aovvcbjq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qaqmhnbi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163kbpxjqyp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163nghtrhsr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wxangjab.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qjnzqdkt.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xjvtqmtz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163unkytwzb.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jwtqkzzm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ufkqbvvj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zyyoozfa.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vpicoaae.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ubqibsrw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163nfzkyadc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163sabljwyl.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nzkgxsne.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wxwdwjyp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rejptdrh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163adyrbnct.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cbhcaaoa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163qpebvhjt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163sorspacd.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ywgildcn.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163pwigcduk.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ksndipkf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163owhhgsgz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vtuavgyk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pessmytn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wzpbednm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vihymipt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ugnjxwpd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bvnyhapg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ngjvyztl.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qqegrjyq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163yfhitjfi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163hsbdawxp.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vvmrdyzw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dvfmjzrr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nwilvqpm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ozudxbow.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163uqbtofom.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163glfoeitu.html


<!-- 参考信息 -->