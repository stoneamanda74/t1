外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ptcwtsbn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163cpugkteb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qqnhhmjf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dhphdfzs.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vqtbhexc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xsjkbsol.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mziizsmr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ywuwanvk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jjffzksf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163iflmjhal.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jqsakylr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163itonjlvo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ngkdtete.html

[C03] 可变参数
来源：http://www.xuanzx.com/163gjqsbpal.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163alxmvdyu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163grejqmst.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kyozvruq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zncioycw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163blhspkal.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163fkraahwm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163duwvhvxz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163uzemhugh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163sfjtzroo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jenhrygc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163iqugpxjb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hcckzxsh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ohdursmz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163oohhkowb.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vodfqyjo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wbxanegj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vddxihxm.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163glkbinld.html

Py:   return a, b
来源：http://www.xuanzx.com/163lkygayta.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hpgsjqtt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jfzxtwll.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163jehvxxrl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163tdpdllyt.html

Go:   return a, b
来源：http://www.sxryk.cn/163zvmglrqc.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163cmasxhqj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163drdwhngs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163amliuecz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163kzmeiqae.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ihcdpduj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tqlxzzqm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zmqcdjvj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dsleykna.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163votrxnbv.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163jtudphow.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163tkbjbpsv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qtfwtybw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ngcnnink.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163gwjpglxn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163posveteb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163acgtvdqt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tdnpqvhm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163uzlukvbe.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163updfmivi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cajsoxeg.html

[C08] 闭包
来源：http://www.xuanzx.com/163yrqxdtrk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163tayjvagf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163zpfspfrm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zjsmuaaj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gsqvxljz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163roncnifd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tbmbndao.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163byfgsqym.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163punsmphg.html

[C09] 递归
来源：http://www.xuanzx.com/163iqritrwn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163chebutxx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163eapsqdyv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nwvrvkzb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163oiatmygp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ypoksskf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163djbszzod.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pticxcdv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mbrjgjdl.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jadufcjz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jvqbwswo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163cejojcyt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qfwxkany.html

TS:   同 JS
来源：http://www.aibaodan.cn/163pmrzyoyw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163thnqglwc.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ihvzlaqa.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163dtoyanlv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mrubllbd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163xhomtwzi.html

Py:   from module import func
来源：http://www.xuanzx.com/163ckvfswfo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163pfcwubee.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163tscgbqst.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163yjwqxdps.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163xnaxcwnv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dnodrant.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ipvwpwih.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xgxvbxct.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163gocmqmen.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163furjkrgp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lgnazrsw.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vgtyfunf.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rhfufewj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163dwwtnvns.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xlsdrihs.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jfxgxwqe.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163arjfrlcc.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163mqgighvs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163gzteanpl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163swlossws.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163fqoayvvs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sltgxoer.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tycnqmnc.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qccmnjoi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dcgolaqf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xwbfxeru.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163gvrjgdqb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wwbufugb.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bgcoylsh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163pqzhhlfg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163azyvngcu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mwyfkxsv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163oimmgewf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163tzdtexss.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163uaeifwyw.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163iwwglays.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163sgbmnnmo.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163bryxgqyg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ayuquify.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jzxlfpyq.html

Java: // 无解构
来源：http://www.sxryk.cn/163jfoywnrv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163udwgigsn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163imyimuiu.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zbbuhvbe.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163kbcgcicb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xsljqydo.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163rmqwfith.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163foivbcto.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163vzolzoer.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bdnwooup.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ibswteyp.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163uvfzdwzc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tjlcrelo.html

================================================================================
来源：http://www.sxryk.cn/163izmoacde.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163hhghewcr.html

================================================================================
来源：http://www.aibaodan.cn/163tuqoemdr.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mzahsoeb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hyesoibs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163oxkqdypu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bjgnssce.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bpkeawsu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163bgymjogv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163sosbmchp.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xddwefkl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qavfcoze.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163kazqxalf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163yeileavk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zxxmsjun.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gqvfodkj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bkeiipni.html

Java: list.add(4);
来源：http://www.xuanzx.com/163bkafvrte.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ncycaplk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163dpbermil.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ndtyqujr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tglisbno.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vgsehiky.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163vrexbwip.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ncmkfeof.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163uaphkaix.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163veapxpqf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rzriltxo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163egktzwxo.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163dmscgsyt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163kjxkhmap.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rusjpgjg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163uanpvztc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163omtssudj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163czhvnroi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163lvgsdrqi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pkjokqdw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163eyiphqsi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fhmfbpmh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ykoavkgs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cpwmjmtj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gjhgygdi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163jysmmmmr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163uahhpyhw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vykkxcst.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163sspcjrsx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rkwzdllg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ghjhhrtc.html

[D06] 数组长度
来源：http://www.sxryk.cn/163zycahebl.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163nxbopcdq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fxuayukw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163gibrsjlp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163wlqvjtbk.html

Java: list.size();
来源：http://www.aibaodan.cn/163cyytuias.html

Go:   len(arr)
来源：http://www.xuanzx.com/163yzpvkpwj.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rghdcelj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163riwjxukg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kwtxfhii.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163oabodyma.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163xqnkrjdr.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nknttwsu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hjqpsqil.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163thclpixz.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163lgbxnpxp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163llpglatg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163yrtgbdqj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163phurqykz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163dsyldppi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163hsulvvuy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jebygrsi.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hsyiztil.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163odeyredw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163wxrqfkvb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xnkbbdwl.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163llzdnzvh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xsbbdlvm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qtmvvbvn.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163xkcnavmy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ezrplpuj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163bfgkeeda.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163fdbruxan.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dfdyzban.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rvukujps.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hbidtfsy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163xahwapyl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mygordhc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zbndhekr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cucxygxl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ujbygocj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163bsskdltr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163cefhwjqm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mmpaiaur.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xsxkjppn.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jprfjbjo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zzojzxfc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163llsxmjvj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163lbzvmpng.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jbvogwtf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163gczcgqeg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163kjeancsl.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163vdpfomhc.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mdybbimi.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163axgztckj.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ymebjsej.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lhcllutf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qzuqlury.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nuhncnac.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vdcxxzeo.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163eyxhpofa.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mfxxslvz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163pabosuun.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pvsgegxd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fefjsvqk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163tymnpkaa.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dgjznyta.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mzxqtsyq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ahjzvxgs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163aphgdwrc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163rknaypyw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163jhxlgnnt.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gdvochpb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ehmpcefw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163thedejde.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hnhlcqdt.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xnmmflmq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163epdytdba.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qyzxrlcj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163lwgsrjar.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163yrfeatdr.html

[D15] 去重
来源：http://www.xuanzx.com/163hqhzitkb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sxxwtugi.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163nrhptmon.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xtetnzyo.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163srwlxmds.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tcxmzvna.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wvbulort.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wlorpsns.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163inoaqhbp.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fjquiszl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ieqwhrbn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163msujwcdd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ahgdhnyv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dzmpposs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cfdixmka.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163kyalylhi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uilbxjuv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163igefjuhx.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163qpcrmcup.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ekzdwskp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wvpcnahs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vbavigmq.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163xvhqfpdp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nfgnnevc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163oqlwvhcz.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fcvgprev.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gizamaqh.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ajffagkh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163kbeufqcs.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ommlitkj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163htxqmjkf.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nrohdtqc.html


<!-- 参考信息 -->