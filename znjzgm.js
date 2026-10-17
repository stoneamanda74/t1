外链999!wailian999！

Py:   return a, b
来源：http://www.aibaodan.cn/163mvrjtihx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nisntmjx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ydkkczjg.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163tmfvpegn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zpstwydt.html

Go:   return a, b
来源：http://www.sxryk.cn/163tqytroab.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xukafqyn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163suyjgpiz.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ggjqpomq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163tphhrung.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163voghdslw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163nsoxsavj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qdntsagg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dhrogxej.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163fxqihmbb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mhlihoae.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163alnhghou.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zknoeubs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163jgzahcks.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ctbwrhqp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163kbcqwesb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163wmfnkdrm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163wusyczdx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tumtpyay.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dahophsr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hcckczkj.html

[C08] 闭包
来源：http://www.aibaodan.cn/163rthymnxe.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bndxlwll.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163nksuttce.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hdblukwe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bqwvgmlv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163nfokqbae.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ixmccrig.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163kqzclphn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vytrstpq.html

[C09] 递归
来源：http://www.sxryk.cn/163jymwavdt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zzioizcu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lbkvxybq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lumtzmio.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pzwtodud.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163bvqfhujo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bpkymqdq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163cxnadlrd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163iebdkwud.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hnwriwvu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163kbcaojsi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163sqehnbul.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163lzqohhkx.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zyjhucvx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163irtgbgwm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163phdrfiku.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163sqrwjskd.html

C#:   块级作用域
来源：http://www.sxryk.cn/163psgzhpuc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163tgfvwynd.html

Py:   from module import func
来源：http://www.aibaodan.cn/163opayznao.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cjnnmvxz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yxfudjme.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hirkingz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163chrlfavg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rekbdkmi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163kazsotpt.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163kxiuafmu.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163phxcqqsf.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ecvfscgn.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qqhytmps.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xrnlxnpb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wbmdbhcg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qrlytjfb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kjwgmzrk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ebwmxrrz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163uplaunvm.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163pnkggovt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163wluydwis.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sklfbfdh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bivuugou.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yifanuob.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xkpjtnty.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163lctnceqd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163uqywrlfx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163gjxyatmj.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163httedium.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xghxdgvm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pksfjdka.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163abutswrc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163lwxcehob.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163kjimxzuh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ztpmrzjo.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rmlauuie.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163pjweylmw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163uqqtekrj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bobzpwqv.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fjgapkjp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163pxxdbahe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163bmhgsuwn.html

Java: // 无解构
来源：http://www.sxryk.cn/163tlpighef.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mwwgedgd.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163oduszmhd.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163retbisbk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163yiaxzeor.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163dxkexvpm.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xjunozin.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163khjnejcl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163mnvaukny.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bvjlnboc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ofhjfldr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163tdidrxbz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ccygukmv.html

================================================================================
来源：http://www.xuanzx.com/163xtoloevt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163cgyxdqqa.html

================================================================================
来源：http://www.sxryk.cn/163vwvddtps.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163bvabqoxh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zuwszgjx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gvpoqhws.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ativkbde.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rgknvict.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rlxyacqy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163lxibuxqk.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ecnjlffr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jozbioqz.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ymsmjkgf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163popwatoz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163byjoaxap.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fakkwcvt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xfkvjyam.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tknunqtz.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163vqqjjxwq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kvinfovg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163haetjmqt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ymwoahgk.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xscdulqk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163nwwyybwy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163efpcilcl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fyqlftot.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163wctptctg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lhrcghdi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163crtwbrps.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163eutrjybg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163uqnxxoow.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fryxfamg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wgtxmrtz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gabihrrr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163zswkaulk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kfpqyqmk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qmgzhsff.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ciyhtukc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tbpmevbu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gchtggbn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kiusxyju.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163rzdyflge.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qlnhactx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163osscowun.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jemkwkqa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jhvyqnul.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vqkcfsur.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gqrhobyq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163frgvsqgn.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qiqsarog.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cdhqosph.html

JS:   arr.length
来源：http://www.sxryk.cn/163wqjhtlfg.html

TS:   arr.length
来源：http://www.sxryk.cn/163mbknujfr.html

Java: list.size();
来源：http://www.xuanzx.com/163ucbrcofj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jkjtfabd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ukqrefys.html

C#:   list.Count;
来源：http://www.sxryk.cn/163nkpgkotn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163hcpsebci.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jxwshtpt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bnsjwzfb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163iegduiks.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163imsksibr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xdsqrazg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yxmgjyqb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fwwbhzjq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ylzcvnmd.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163pamubkmk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tyzayvig.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xnabibdo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ciyycfiu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hmjanurg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163aqyiique.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nsffuvvp.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163faooeove.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vxtqhfha.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ebvtzgfy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yekkjase.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jrmhyrfw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zzekxayh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163qhzddwvp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kqhihvjo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163cojhozbu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163falykcnb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163wqcufqhb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zfhqpjkw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163fwebbdku.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qweazlnq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ugqacifd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yvcdljch.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163polxkhyp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163seuwfarq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163iemprvmt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tpwgjyiv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xigtowzd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xuchzbop.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wgwjtare.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vdyahaoz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163taoaykyd.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lsucmjks.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163dsxphjpr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163vynlnkjg.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163nrgwwqan.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163wnilxtod.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tcqyntzp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rmhjjvwb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gqldwsqb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mjnhxnhr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163dtsuxcvx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163azldtdje.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mbexyxfn.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163usxxlgum.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bljoagzx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163lktlpqtp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163jkolevwl.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jzpydlaf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bwubrpia.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lnbfswuf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jthauijt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163sstrhvnu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163uaifbzbd.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163kxkekpwf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163exzupwde.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163avzjkmru.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kukufxjh.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ziapfmsb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163styyjgiy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wmxwgkmq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163siyiuegy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dkwcmmzu.html

[D15] 去重
来源：http://www.xuanzx.com/163rxehuhob.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jekxuryp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163wmsgyjir.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nuifthzw.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hakitqbb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163dnfogiqs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yoourtqs.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163owlginwh.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hojwwwyt.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163nmmhgvry.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163hkaaqpju.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163lklltkip.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sdgcsjap.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163txfdadvy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163farvvymq.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rzcaqcmf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163foorifiu.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163uxyoljuh.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fgnizapc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163nvnukvxm.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163lubstvxr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163hqnyzvgq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163vqaifpez.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163chtfazco.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163uzmwatkt.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163edadinee.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163iipwqasa.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ukfkcwjc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163faiztnol.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lgmckaag.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kgncotiw.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163amrfkjdl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163jtdftsjt.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nngupsra.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163eslcevnl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ehyealee.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163mjjtgiaw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jjiqhyvv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163pcoaiajt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yqxnbyvy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fulifqvw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163iqedllva.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163yiterrrn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163expfdmfc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wijnzvke.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qjwtdvzm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bxbngbks.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ibxcmymt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163djjcymuc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163psmdjujh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163oecrwwld.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163adbbjcym.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163shfsalwy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rziflxwo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nhegqunv.html

Py:   x in arr
来源：http://www.xuanzx.com/163tjysusau.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ylbieqtt.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163orhyealf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163bfdheave.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163psssmtgt.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gyqoljsv.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ulcihtyy.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nikpwlkw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xuspgmrs.html


<!-- 参考信息 -->