外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hcxxbxyi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163qvtrfcbz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ouagiiii.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rpdckwwp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xpdtydea.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ugxvthtj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zwuwwpoq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163yhxrvgyx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kcsqerbr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163hgrcjisa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163madhxrbc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ajgxuhvf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rwnfftlg.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163icrwhzzl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vtftyyhn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163hwwanuoj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163admwwmsy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hkshawpq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yahdqknr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qvbbonyr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163xpicxplf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vtoenqqj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wtwbktie.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fnkyffpz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163flbdkklb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163qlihutsy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qwfmbvni.html

[C09] 递归
来源：http://www.xuanzx.com/163zrxckrev.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bhvjtnxi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zqrsyawz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bqeozxhf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bytsrkex.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ystmicvr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lgvdiwjb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jdnslhcb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vzipbpkv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163swdgtxvx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163qualmvar.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nwtwvels.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pzroofji.html

TS:   同 JS
来源：http://www.xuanzx.com/163frcpkatl.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163blyvxogh.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hbrvbmmn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163mmvbozrk.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jdhgvbrd.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163kjwkdrwd.html

Py:   from module import func
来源：http://www.sxryk.cn/163kskuubgu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163nharnnjx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163yhsipvze.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163eipeifwh.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163egaabwzf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163cysoftwz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163aagoioek.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163elngafvo.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163jfpndsub.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pvqzbilx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163vecpgvfn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wvzbbvph.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mjjdltdq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163elsimfcx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xeuzbfzc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uwlljlcj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lpbfhlie.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163poqzzxis.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mqgbgjno.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163phcwbyyj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163fekyqsji.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tzhrfqph.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cznpugbg.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ksawprqw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fnefaavk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vmnbpspy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gabarcoo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ivvkmswa.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tnxfprou.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163kuraautk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wmitafof.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163svkwuges.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163fyhrjaxu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163egrrncfz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163irtmbtfa.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pideqdzp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ettnnsgk.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163isxdeizp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gazvzmww.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163nroxweek.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vouthlut.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vzstvqjm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163mynjtrip.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163mjfobrqj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163xnudrtvq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mfgpnakh.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163hrzyaeke.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163iyvsxgpy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wwjzmsvz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163jtrqojsi.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yefjokel.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163njlgwfsx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163oddopmwq.html

================================================================================
来源：http://www.aibaodan.cn/163prmykxxi.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163vysltnpw.html

================================================================================
来源：http://www.aibaodan.cn/163tgjpqufm.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163zcakjhtz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wfaygaco.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wafhsuml.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163aotzmyfs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163svtmgpxf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163jgytdscy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kegsetbu.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fekdsion.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163wpyphued.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163wbjisrmu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163leoslexz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163kxnwrtqv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163pdpruqow.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vdkzhkzl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qwiazmey.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pnzquipd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rokrprlq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qcfsfwij.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ghesltim.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xdsgexrq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tdaxsmmc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xhebfxzh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pdtoysit.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163vwlvjuid.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163weoebnzi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163qawxkqru.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lkcdcbfq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zwvsqkdg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kkfkiviy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tphgefdn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163peyyqtve.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lmczmlgz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ranpxnxb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163hwyhcduo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163auqkffvb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163sqhysren.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163iqnzmhel.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ndelmswk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163fljznqvq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163uegglqzu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163dbknuxxk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163huilfjcx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ayyojnri.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163cjkvfbwo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wosfabef.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dbjazevb.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qnnzxcjj.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qjfxbwap.html

JS:   arr.length
来源：http://www.xuanzx.com/163vcyjcozy.html

TS:   arr.length
来源：http://www.xuanzx.com/163eablrafg.html

Java: list.size();
来源：http://www.xuanzx.com/163iiaxhavu.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rqnniaiu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163gjjgcltt.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163oudsmxbf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tfqwmyya.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cnnamafe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pyupzphb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163namfryke.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ixenwhxr.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163anqtsutz.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dbvkwgmf.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163afvtudgl.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163uevipech.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ospduhai.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163edeksybo.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163bwjdgluc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163djdnbhkp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163tvbscfzd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163whvlairj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qweqgivl.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163iknxlyzq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163zyaeilaq.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fwskmenf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163elusepil.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163rpfzjlmj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163vibszefl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hmgwpsiu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vvdslbpg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163hajwufrp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vaxlwbcp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dsszugsk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163narrhfkm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163pgnmgbla.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163skojlapd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cmwnzvih.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mtussfhr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cnoruddv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163quarwlua.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ajfejgga.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vvjkhysm.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dskjbhsf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163afdxcavl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163nycbyayh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163bcsiekcm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163cycmnxys.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rilrurag.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xhijsssz.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163xhslrnoq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dirzwmte.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163djcpjtqk.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163aerkojzy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hzkodagf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163znnkfkri.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jdhlaton.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xvwopdtk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163prdztwpa.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lyooggkx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163aihkfhjt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mxcsbzzq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ouqrnpwd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163gfibnspx.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163omxgbfsv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qvhxevti.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163raxxvecn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163enitpjiw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zvnqiruf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ymgxrgrl.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163assdkett.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163lgyafdyy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163xeiuqvgj.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163yjbudqiw.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wmebslfy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163azrxjeeg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163eyrxvdll.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163luuszebc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dvznvefo.html

[D15] 去重
来源：http://www.sxryk.cn/163dzpqjdbf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gcjpoefp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ireyuqzr.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163enopvyey.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163suaislug.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163xfedsgsy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xxprlafc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wllowfhp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163eicbdcxk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163mjipzgvw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mkpvdsio.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163xxmvpsui.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163llppxpgw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163usrhzvyl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163qwhnaguk.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163xtadktmb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163lbcirlor.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163utubbinm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vwodhrbn.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qqzhgdqw.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163geeigsnh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rimwqroi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163bomotdqs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rcycplhr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ttgggcyq.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ezzsbypz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163apflffwh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163izxftlza.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ctmasejl.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vrtbxwmf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bzlfcsuf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vmixiugg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163sfxyhoqf.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ydgrbtvx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163znsmhsfm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163mssalcqf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163btukbnet.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163tjbrmouw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ebiszkzu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kntcnovh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qlsakzpb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ggzdeeag.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163khdtfjzq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fzlugvsb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163swjzjzlk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tzgrrduw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pklcfnuf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163pkrpwcag.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gbgffamh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pubwefbd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163mnyfbefk.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163untrtpji.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mlvkfpkl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ydtgkrnf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yztrqokt.html

Py:   x in arr
来源：http://www.xuanzx.com/163pdsiwwum.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163gaigjknf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163txtzqfoj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163hchgalno.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ioupveek.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wntxgbrm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hklwheas.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qpykqfvs.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163jccfcrrp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ifddxzmw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xnbwxkqs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163tmhksgos.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jckgbzru.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tpavxbej.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163asprzzch.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163hzrijnhy.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ddidiipg.html


<!-- 参考信息 -->