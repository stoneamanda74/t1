外链999!wailian999！

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163jhvegbqe.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wqlsraln.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ntpueexs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163joffwmae.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163dosckpon.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rclipgbf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lxxzswkf.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163zkgkimyk.html

Py:   return a, b
来源：http://www.xuanzx.com/163qqxxfdrr.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zooebpzh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hnyzqajy.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xoxjvpna.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163aqbicybb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mnvanoxz.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yzfbunso.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163zjrocfip.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163yunptthz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hhubpzpx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163poquvbvq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bmdzzfvn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163eboclqky.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zgnoqdzf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163onmavfun.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163fgunsgac.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163suhjwlvh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163tcyhphpc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163tqwzmoik.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163nxubbwke.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163gxccunvk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163czmemuyt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163imgbetur.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bolycirb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163nkdilpyz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wakwzizd.html

[C08] 闭包
来源：http://www.sxryk.cn/163mvlyxqxa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cnbzfzen.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163pdejavmx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kxtkyxsd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dydyrudn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163uzjdvsla.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163hjlqpzxh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jgnfiary.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xoadtubo.html

[C09] 递归
来源：http://www.aibaodan.cn/163nfpblqgp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163dwkbegln.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gtvdoggm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163szbqpczr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163eeidtyod.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vajndvxt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163mfzlmocl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jpqhtoru.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163rguqnwzs.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wyiooqcd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tfxtgghs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163sqghshww.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tvsoxffw.html

TS:   同 JS
来源：http://www.xuanzx.com/163hedacxpu.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163nzuewalf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gvtpumvd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mccbkeio.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163zglqaqwv.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163cjqaiuyn.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ahjwiuzs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qqxxvgpc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163umalwlzj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wtclclgm.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ytipkkjo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mrntkldy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163urxegbsi.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dhftdycu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163oyciouuy.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163omqnphpr.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hvgrfkvo.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163uoapctjz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wcmmfwtd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163eqnuwlly.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ppjxjvhw.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xxsljdii.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163iikbtofb.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163unaaephj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163bacokmut.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gupjltib.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163odvzthox.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ycfgecpt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vdrqqpsn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163orddabae.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gigdctsv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nbpmznmr.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dnrqoylm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163uqqfkehf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163piqeineq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qrsjptrp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163kqkulfup.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163teplawun.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qlrahery.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163cfukkjjd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gbvbhmjo.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163knxvoqxc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tnohpgaq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163flciixuf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163vaxrqoox.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163yivggbdx.html

Java: // 无解构
来源：http://www.aibaodan.cn/163gzlxqbeq.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ahtphxsw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pftdjnzx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qxqkzemf.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163elhvbztl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kcrfcoat.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163neirahak.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163kgccgfyh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qgieoqlh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163sfpxybli.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163hrpunvsh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163uugqehxl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ravjgykf.html

================================================================================
来源：http://www.aibaodan.cn/163ltsyeomk.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vsoghhdc.html

================================================================================
来源：http://www.aibaodan.cn/163ouodstkt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mmalkwhv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163gakupzdo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163zttwpxnh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rbsrnqfp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wccijjmo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nlddqbpi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zooqfyzv.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163xezynqsi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163aqmjouqx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163kitoubjh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163wcgdgqqh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163uvlaiufq.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gqqhunjx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ohlmqhnu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163grsjvwzd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163tcnzdiwf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rbsynwbi.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163oknircqe.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xabnvvxx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vgtlqsvs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ojwzwhrx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163evjgvhnn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rxrnujqk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163oehwiops.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163xjrvwvky.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jvxcgjxd.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ljmtdjay.html

[D04] 删除元素
来源：http://www.xuanzx.com/163pbebigix.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gdymxrjv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163oqneuhxi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mdhuvrsb.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163swecglcs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lduyrfgz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163nueagahh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rgncayfd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163iuankfsu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163qahvxgqo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cwxiglsp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xeqiueqe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163lgpeizvs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163nnujzqmd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gthhyhfc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163bwiuhqug.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nhuikaiy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qkguiikx.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163qcgqfeby.html

Py:   len(arr)
来源：http://www.xuanzx.com/163junvodhb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163glslsejh.html

JS:   arr.length
来源：http://www.xuanzx.com/163bvvzbknw.html

TS:   arr.length
来源：http://www.xuanzx.com/163jvisayrt.html

Java: list.size();
来源：http://www.xuanzx.com/163ukqwpvyh.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163emsbxprn.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163sdewokis.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163dcykbfah.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163esisjbit.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gxiznvrl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ouxiwhph.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dwjbncpd.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163khjyelur.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163rmfcsoym.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ojyitiqf.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jzxqmghx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163pkrnmbto.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163knutzcrk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vnpdxkaf.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163klficdmp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vufdzock.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ktumteyd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vfjiiryx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163fmmmarrr.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163dhtkhope.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163gbrgwvsz.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xwpfsrso.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163asqqzyfh.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163tjvenizv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xqoyntkp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163lnaoweyy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163koyjpuby.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163eenwnfja.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ifmyxkeo.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gwwslyea.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163vmlmcdmm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dpzovyfo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163twkftyuu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ofchlkzo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vgswlsie.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mavawqcy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jflvabjk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163niccangu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163wlkhzxjj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163noqfyrni.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kgalcscz.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ostdyulv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163hxqnvecn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xgqnmtjy.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163bvnmyhjk.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163pnulcwgq.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163eqkrzydj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163zutidwig.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xgqdsgry.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163yzvepknm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pbfuogqk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xqqwioxf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163unfvfcwg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ldmkqxag.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163kkutblax.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163oeomwxys.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163elszkvxi.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qfvaaxhv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163spmacbug.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pbghuwfg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cvxyzvmk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ercwivnu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xpyloalq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163aczgwgoj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fzjxltrk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ifezrnzx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sjykuyzn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fulbiuhv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ywblssur.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qzltaooh.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yqdvywkz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163jdfyybxw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wlwulfie.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163joomfyhn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163xqjaprst.html

[D15] 去重
来源：http://www.sxryk.cn/163kxkiauwi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mycycjnl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163tqcklrst.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tqrtqftd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vuigjfty.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ufseaxvq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ikpoyykm.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163uhqpdxoi.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rbwuguzt.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163brqkcock.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zwbzqmxa.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163iyrrhycu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cfglokzk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jmwhqeck.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gyspxwkv.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163zvuiwfsn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163gxspgqrr.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dqlltnun.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wissqzns.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163rosvxxrp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163laptdnwd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163hucuahbf.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163owmqxwcg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rzfjjney.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163svrrpbrp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ocdtxkhu.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163seotntmx.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gpedwlhx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163rwwvujnf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163pnwaujtr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163oqwyovtz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163yuspynhv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gqwpzwbs.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163jmfannuy.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163asglmmex.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ibvlsizp.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qcbzyekc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nachjplm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163donowcab.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vijhubvm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bnythrjq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hhwhzdsd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163arnversx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163fpzzowpy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ujqzbrvi.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pmoyihfj.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lnesmmax.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163nubmzmxg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163noamnnwg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xnvndkpc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163shjmabew.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163wctrifpp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tssnlbra.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163iiutjsde.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163jjqwtkrc.html

Py:   x in arr
来源：http://www.xuanzx.com/163wnacdzyc.html


<!-- 参考信息 -->