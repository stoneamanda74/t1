外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bhlzsazs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hubcncza.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163chpfkhyy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163gcohdayw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lparsgnx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rkyjkxwg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163nozncjfq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163frkgptwf.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163uwfgqgwc.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mwhetjzv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zftbjyka.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163oewoyald.html

Py:   return a, b
来源：http://www.aibaodan.cn/163tyyqhltp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ndyxxrfh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kksfykpe.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163etnmsivk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163aotbgzns.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rdxkfari.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bjrzliuc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163zeuochdt.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hcbhidyi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163enxwuvce.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163drjdcyox.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ryhgnuel.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163wwvngcch.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163kvjpgmnz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163nvdcwesh.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163orwxqxcp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163eqdleymz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jvlrdfnu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ghkakorg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ihxdplcu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163axykxzev.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163iancnzfh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mffgrait.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163iqxfvkuj.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163nxwjddda.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163tvimnugg.html

[C08] 闭包
来源：http://www.xuanzx.com/163lpxzugof.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zzlfkuyn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163iacrgjcv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163umammdzv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mfqlplkv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qsjxjwtp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163jknjerzv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ltmtloyd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dsfyhrfw.html

[C09] 递归
来源：http://www.sxryk.cn/163cxinmxkx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163crdzasre.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163oslrwrgo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wtfccduz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uqncvjag.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163cyqctyct.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163tjduvujx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jpclecrw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163esyizdcs.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vhzllpkx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nxrlxvfm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ngugllin.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163sgapkjgr.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hqjoulxz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163agcvhity.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163euetpraf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vufuprro.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163tqxfjipu.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xpcujhbm.html

Py:   from module import func
来源：http://www.xuanzx.com/163soifyplv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qvqalfis.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163suznmast.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qbmsddgk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jefmdtzx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kruqgdvt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ljplvcgw.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163alosjtmw.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163guwcphsu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163mocvpape.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163zsllextx.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hxdlgkew.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ewjhxrut.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hxcdbjkx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163kufgtyap.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pfxwhdqg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163cmbhchkt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163csklzghp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163fposdrcz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pbnbpsrb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163zzdwmffs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mzowfwpf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jbjjzwpj.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163oxbqqnfu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rpszdhwq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ysmxbrcq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ubjkuggy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163pmughwgr.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163usffxjlw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kkmiqexd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163veioqpeq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163kkodfkzs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gvkcjtmv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vqwdpetk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uhwpmnss.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163fatwphzo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163upyakyhy.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nsmyvklk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163kwrcpfce.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163pwoootus.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dhjpkimb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nkkcbuuq.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cvdounli.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lavfjtmx.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163totayxku.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163hgcjadvl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163qxanozbe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ejrjrtii.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lemrpdon.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tivvahva.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163fwtmecba.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bqgrutfk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163huwxospk.html

================================================================================
来源：http://www.aibaodan.cn/163pcogdvgg.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163jsdytdov.html

================================================================================
来源：http://www.sxryk.cn/163dekauqci.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xhtqbjtl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ihrplemm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wdbvetvu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rlyvosnn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jssumcdp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163vaumlepw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163skuciomj.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hlqxbopt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ynghjzjn.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163raqqrpri.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qqxnvxsg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ahwizglm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gajzagli.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163iuhzasim.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163sjbuibaw.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lsnconht.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bhgjkhwm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kqcaktmp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163tgmcpjcl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163uauitnlj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163vqnijghm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tpxnbhcf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mmqmogkz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163awcdpwmr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nquotipz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jpgwbwea.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163csndvbar.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qnvcmstk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kwwfwvaa.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mmpitslt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yvuklwon.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kgbdoogj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ipoggavf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ilewdhpd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163uhlwdrcz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163porkxpvn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gtebrljh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163oovgcfrs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yhrzynil.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163smglljyd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fnriorvd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163mseaheot.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163autreqib.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jxbnuxii.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vqegwwcz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tqpnfbad.html

Py:   len(arr)
来源：http://www.xuanzx.com/163zlqozrxv.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163iozxpnfs.html

JS:   arr.length
来源：http://www.aibaodan.cn/163odzyvzyk.html

TS:   arr.length
来源：http://www.sxryk.cn/163dlzzycmx.html

Java: list.size();
来源：http://www.sxryk.cn/163sylwculg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163nauugjpo.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163yvvatpqq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jykxmbxt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ivpgkfmv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mbtrxwao.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163avuvlwvv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qqtjzetq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iofmvigw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ojlfwgps.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fhftqvjb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163toxdzntd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163cqphdnru.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ksiorqkg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qrfxctoy.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163keijxith.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163lfalxwos.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163gmtyfvtb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163fgrukcwn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163vxnjcahe.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jhguyxar.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yjihaxde.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163gtmprfrm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163byinkewd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163enzwvbnp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163figfssgp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163nuihymqt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lgldyqbf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163yshlpsmr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zdququmv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163fplkzpse.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ihzfmdfb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163tmsycxbw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dqbfxfrw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lfqarxfl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163coiuqugg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gqhrsulp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wzrlvbcf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dgxxdmtu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ntbwztrr.html

[D11] 反转数组
来源：http://www.xuanzx.com/163uigiwtwi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163eebwnosu.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cxqplerj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jafbeffd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ocvysykl.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163knedvban.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163euebfvjw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163eohcwbfc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163pfpaprke.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163kgqrijzf.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163oyvzickr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163avzfenhu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zkapnwww.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yqwejuim.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wsfyevay.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163isqndksw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163yicreyja.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nbiicfak.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163culwsgpk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wljczffr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rkytumuz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ldmlxyco.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nefxqkqm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jzdabbwb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163oscedbbl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fmglhlyq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163nvxpgnns.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163taelibrj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163wylcnmap.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163wkztnwgd.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163svwhnsgq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yrxeepno.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nclucvxh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zxpshxhn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163wmysuqlu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zxmppzie.html

[D15] 去重
来源：http://www.sxryk.cn/163rfaqzyyn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lccvvlyv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lnlzsmne.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kxiijday.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zvdmprvt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163uphdptzh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163omwiihmc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dftjkhlo.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fnazcqbl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zuqaazoz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163rrgszxfh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163sgthvthf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hrptacqt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vvrevnqv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kbchvzzq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pcbplzeq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ifpjqiol.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163stfppmwq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xyggrlue.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163cekeaopk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zjivvwbr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dqzlcvwh.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163twwuzihh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qnplkgtw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163zrsqpdpx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163bheqxcre.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vfwuvmdf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qiytakmz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163iousehvo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163clierufi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163orvobruq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xflavmtp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163yuffiypo.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163urzcrstq.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163efsmgtnw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163nymzzzyu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pylldanh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163frlmcbqv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163waolrhpy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163whlqszdz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cxbxpked.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ikjelwub.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163tmiziuml.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163udzukhji.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163fynthfvk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163wijwyqpw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yfqlzube.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163fxmqsfeb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rfrsfvie.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jmpiswwh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163vdvowfmu.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163kyucbliw.html


<!-- 参考信息 -->