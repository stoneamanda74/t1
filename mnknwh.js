外链999!wailian999！

Py:   return a, b
来源：http://www.aibaodan.cn/163dmgrpjcn.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ggyamfxz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163gjpwjrkm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163itpdejko.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rojqzghn.html

Go:   return a, b
来源：http://www.xuanzx.com/163xefwmdgk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qnvwpxxu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ugsakujp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163onugfuoh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jcecmlbm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nxrzkuan.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vwjrrioe.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163gszzacya.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zxedurhb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ipgxdaec.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hwpdgloe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163trtdkxxh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163waondmof.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163arrtevop.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163oyohvkxz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163qthkbbsa.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163jomfsbgs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163gfwdufsz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163iqexbhuq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ghmcaokm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163csqcvmoc.html

[C08] 闭包
来源：http://www.xuanzx.com/163fkcmmgzl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hgdvisti.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163gcckdjmi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wzzlnpze.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qyhsfohi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ashlzqbs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163wutiduur.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163dnsjljdf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xyerrqvj.html

[C09] 递归
来源：http://www.sxryk.cn/163ecepftib.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163acqyakpe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163fklzvweq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163itdpmfzt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pyxliekp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163yekgvckn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163gfgczyus.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163hxvleihd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xzswjldr.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jzbecuog.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163sdezbrwc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cswzqgqa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163kszlsqpv.html

TS:   同 JS
来源：http://www.sxryk.cn/163kuqfpogw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163vfdjodmm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tyyajfjj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163kvvtpynw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163umyfcizm.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163otivgnag.html

Py:   from module import func
来源：http://www.sxryk.cn/163pcyvhvgy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163impiyqla.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163gdbgxnak.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ifqritbf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ugjwrgkh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163iceqmhtj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163uhitbgxf.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163absibiyo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dsykfgbl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lzhswpiw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hjgivvee.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ovebwtqb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jnqtjswh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163rglwlgtv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mdbnhckl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163anpygknv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mlyyfspc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163fbbkvlex.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163wkcdbfcv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wjqgfajw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163wjtuumps.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wgbcxrgo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jsgnzzdm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163yprkyvft.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lwkunwjn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163npswotta.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163cpvptsyj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yqlsbiyw.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163deojodbe.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163vtivequu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163gbsxyslt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163jndzcutv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163pbzemhre.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163hcwflbcg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ltbliphj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ewuvuaja.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163dodltptp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163cavyjjru.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163axnqcymc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163iyphhwuo.html

Java: // 无解构
来源：http://www.xuanzx.com/163ugsztdzu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163cwqvhldk.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lhuemcgz.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qlzqcbky.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jhereuaa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163sqrdhbgt.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163hscwmxcl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wpjncnor.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163chcvceyq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hqwsrnnd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163zsijcwwj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163yetuqefi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163nkuwwbwm.html

================================================================================
来源：http://www.xuanzx.com/163emkvlbgw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163jxheqagr.html

================================================================================
来源：http://www.aibaodan.cn/163hmkecqcb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ldqoakvu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163womsbyme.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163grezwjub.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ouxrhdmc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fknehzhi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163inflknoc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163esnxmkva.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163aaxacphc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ppukdqsf.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163edtjgdcb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163oevtueom.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fovrkmdp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qwfgxlyv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163copdooon.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wqhqsgpv.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163kulsftmf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163wdezmsda.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163varacmcx.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163vbusnqvf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ghjcopjn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xobnexok.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jqlgugmg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163hjdvwgrz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163fuouexry.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qtuzxnyc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163eaubrttj.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163euhezubo.html

[D04] 删除元素
来源：http://www.sxryk.cn/163lpgpkgqr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163tmwrejas.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qappexjz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zpywdpew.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163uzsjqglf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zgpbuiag.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pwvpckqw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163qwzgdlhi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163awygmmtj.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ztlgsxap.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163emmkuiuu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163dsnphrbc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163makgzptt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zonymyrh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vcdyyveb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163bcsvftuf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rwaawafq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hvupfdvg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hsyvovwd.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yrtkeolt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qtwvbsng.html

JS:   arr.length
来源：http://www.sxryk.cn/163kbyyieht.html

TS:   arr.length
来源：http://www.xuanzx.com/163ipwaydqv.html

Java: list.size();
来源：http://www.sxryk.cn/163axaiytds.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lfiogsaj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163gxsdykft.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qqnnlmmz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jyaoyuca.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163idouuddz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vwnveqhd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wgdnmywk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jtwyklzh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zddqbzhq.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163otzkgxdw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163rfmgstgl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163bepdfdim.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jienqemr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163svvadycu.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qpwabxyp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hdeakges.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163tkntlpml.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163uhyclkyf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163uewhfkms.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bszdieje.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163oxjnknlo.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ybaaxdkj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kaijtqxg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163glvsrjhc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163iauejypj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bkqgoavg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ufmcwkxx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mrpvzini.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ubqiakxs.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163aeixgnlq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163logcccrw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163hlacgpbv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163aifwtsth.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nmzlahsb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zqeykapq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163klufqvsr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163uroktkpe.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163feokuvxy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163pkczuyhl.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xtlrtzke.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163odywlitn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xcdugqgp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163sohscjro.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163tshorrkt.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163eaapdtgs.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163cypvtrmh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ghdccscp.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dcnkgdbi.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qnsygbfv.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163vuiqnfer.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vuyopcrz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ffommkvw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ffzwuewl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fbktibmk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ngoktcek.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xaesfiew.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163qcmjbzoj.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pabjzdys.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qgjheinv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163cuzuhhaq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lagkgnew.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dpfjylxc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163luczapiz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zsorrtjv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163yzitwygf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163geumazif.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sfkykwyi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163fyprtnsr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163xuumjjub.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163frmfejfu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163acosxwbi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dzdugach.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vlroiult.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gijhkzja.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163jijnyzlx.html

[D15] 去重
来源：http://www.sxryk.cn/163vstkqdhd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ximrhrvc.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mfipifuj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ulkkhrwc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jvdyjbkq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zyqvjwut.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163eqgyfedz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163shwxkbdw.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163blbeonys.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163oprqrtft.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163iynwmtmx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ooddocgi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nutsdkxg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163tjpfwntm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bepmwaae.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vljnnvtl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qlhfpqkj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qlfgcswf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163wzyybjfg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163fkswigbt.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163qdyfqhfg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bldkzcbu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163atudyoio.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163zoypmowr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ylmnjakt.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163shicigai.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163demjwkze.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jfsdiocb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fkzsvbqp.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163aovzkkqt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ylhcceyk.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mzpyvwgq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163uzszzten.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ccsvcomd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163fwizanhn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163rewadjqs.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kxolqfou.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163tjwtzwmf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163qozkyfuv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163peajukai.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pesbrjhd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163syqlneae.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gyojajkm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163eimsyctk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163irrislby.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ewhzjisr.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pfefcdoq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163czejrnmy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ptuceyyh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163esrlteyr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163yciiittz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163sgwdqoer.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163wdqmaqgi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fndteoos.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fnzwudoj.html

Py:   x in arr
来源：http://www.sxryk.cn/163dxgmyqda.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163hzffwajy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163utjcyjuc.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dhdonigc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163elyzpyly.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ngauuzyk.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ucmltckj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163rgcbassb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163odiegcuo.html


<!-- 参考信息 -->