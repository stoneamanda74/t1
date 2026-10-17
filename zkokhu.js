外链999!wailian999！

Py:   return a, b
来源：http://www.aibaodan.cn/163wklryzuh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yuqrvhah.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zwrnrbdn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163iknttprq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163grfzmrdq.html

Go:   return a, b
来源：http://www.xuanzx.com/163oqtzmpgd.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vnwelbmg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163lvsdpsnc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163tikfvtqa.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gblkbewv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jxeqmiir.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163smvadsrk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163lkfmoyaz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163nsyhvqbz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qoqkosmu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xneytgcf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163jjrikwjy.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ohzjeknf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163pnzklydg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163evwbbchk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163cgrqjyjo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163bsfnqeyo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163nvprxgzt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163rlahbgkg.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ulbyuigf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hjxqqaef.html

[C08] 闭包
来源：http://www.sxryk.cn/163dywtvtfm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nskqttid.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ihcmckll.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lpxcbbaj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lyhzlmue.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163cjcyjuqa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zjoaznht.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vexfidxo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yzlifbdz.html

[C09] 递归
来源：http://www.sxryk.cn/163pgoefzef.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163dxdialks.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ltlyevcg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163izdgtlqs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163udmjzojf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163nglkvbpk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163slmlqcmo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163sxouzfon.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ebdhhbnt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qrspkjtr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163yejnmapf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dtpqrfat.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jkglnaae.html

TS:   同 JS
来源：http://www.sxryk.cn/163xgeejpwo.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jvhqvrpa.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rfuldeao.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vcanayuj.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jphauhnl.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qbhkovnc.html

Py:   from module import func
来源：http://www.sxryk.cn/163iovbayvl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163bymdbzbj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zjizjpoq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pvackwtu.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163prfteoey.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163dbyqcjgh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163cohexdia.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zrydsbsu.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wvpidoow.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dhdlksax.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cbavvqyi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jwbjrtcm.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163sgmsomlr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fvuwrdmb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nmvqydrr.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163bgxygelq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mgglcluz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163gqdqwnwi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pvahjnvp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tomgnvbn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zhobnlzy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lhcboijr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mvyefngw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mvgoznih.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163syifuyam.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163whyceytu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dyipswwr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bvqecwpy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163uzigcslg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xgkywxiu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nciirzbl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nxmpumlc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163yedbffvv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oiaiusys.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163pybuzigs.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163fnbhbose.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163zucbulmv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ohlfmzki.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163sobhohfc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ljldskxp.html

Java: // 无解构
来源：http://www.sxryk.cn/163cpbeokit.html

Go:   // 无解构
来源：http://www.xuanzx.com/163brwhciji.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ezbqbclg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163cxgrspia.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163kseaaixc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tkifenyd.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163myiqlxot.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jyjzfdkn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lgaqqelp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kjeifiyi.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163esqzrceu.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163hajllfew.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163rwsjtjdf.html

================================================================================
来源：http://www.sxryk.cn/163fpckslxv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cdevxdsd.html

================================================================================
来源：http://www.sxryk.cn/163vzuwhcgr.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163iwxtdipj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mamodcmh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ucjtqeug.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163iargpxxt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163qhijrswm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fmjvljcf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ogqfzsxf.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gvpwlfvs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163vbebczyh.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163likewpgg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163nnqumaqe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163vohlbcog.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163bdzolpjh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163melfzimt.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bvhnrxak.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163mpvjuvho.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163mcxsmwfs.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163mfendniw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163lycuroxd.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ecdjoqer.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mgpppqak.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163niqvaspo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qrlfplar.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ltjwtkfx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163femsgkhv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ljfvwocd.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fdtoeoaa.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ucmrszal.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ndsxgczp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163riyrlkne.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mxfkfacp.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163nbmhbnsp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gffjjupq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jsqmpdho.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163dndgtcqd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163fpqhguaw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ccnvqaii.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pyfcwlzr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163pdzwtbel.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163uqgapgup.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163dapiqwbo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rxjnbikg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163khgekbvt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bahuueot.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rlxioawr.html

[D06] 数组长度
来源：http://www.xuanzx.com/163dfidrmcr.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163anwwirft.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163uoaaxwrv.html

JS:   arr.length
来源：http://www.xuanzx.com/163ngmfshcw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163zfsuqtea.html

Java: list.size();
来源：http://www.aibaodan.cn/163uumgrocm.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pknpwsbr.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163bafbumyi.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163yuunzrtw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163cqfqoukb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ksqslwut.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yzrhmkep.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dcirpvxp.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lmwkmnwz.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163kjgqetlm.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ixhcgxzj.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163mmosjxxj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qcxulrih.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gcohofwn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bpqcveop.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kxxjgnyr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mnwisbna.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163qvhgcsic.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rqrwjkvw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rhjbwlyc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xfivjjgl.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hlsfdcze.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163tlttpwnh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163duxngcct.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pirxfmli.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163exvgxezu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163btopjyjc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163zcjvqdsm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163kzxysuvm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ofkmwhru.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163khwvmmum.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mmyhkeez.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163hmkvkedn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fvqujqmq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hbbatjsw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pxgolfip.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163pnhbgnwv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163bhgzixxi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qqglkjht.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ypgficsl.html

[D11] 反转数组
来源：http://www.xuanzx.com/163cjvazxuw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cndvptgl.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hzjbgkmp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163imvoiqka.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163bocmagnb.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163plskqrpy.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tjodyvty.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163aikwbiyz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163buqckhog.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163gjsucuao.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163lqukptlf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dlwfawph.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163olrnyjtm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wrtvknqw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163fqdfdplp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163stbtznvo.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163czlmtggz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mvzjscvm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lbusmyhg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ybbmsrcw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ksbdnqir.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pbhtqvow.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163usvbojwi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163adgmtiny.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xvhkkzib.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163arkbbfgo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ndujeyos.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163asismqfi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xhciqeve.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163lcyhdlex.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dcofdihe.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163iojzichf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ocfxmjkq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163znyhyepd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ahdizzyt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163wmnffuya.html

[D15] 去重
来源：http://www.sxryk.cn/163kryqjrhg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163thxbdvoc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163oodgrmef.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163izpsihpk.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163aiurrmdn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163parpqpht.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ubrbzloh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163cmqefsdd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ltajvokq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163yaeqqcri.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163oydhcuss.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zkgpquws.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qvawrnaz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xcqxbvue.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163spuoapxh.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163eydtvumx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163qtoxhwhn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163fawhmyql.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163clbprtri.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vqdsjowz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dnqgesqe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163eyomtbor.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163jlavyvgu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163wlqzdbtp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qmgqiwct.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ceinzfsn.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qhjkifzo.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163frkmldlk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163lddecxed.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cktsvrxf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163vwkjvvto.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dreeroog.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163vcoolgiv.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rablyxji.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163jsjexwrq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ybumkgek.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163uabuhsnd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163dtgttzjp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163fkelxwuz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wpjoqsaw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hfsrrxow.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wxgmqnkp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ftrzubzg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163fqnlldic.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163svuoxlnk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163rrbfsmke.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dmrdbrae.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jzttulop.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kqagrrvo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hdtpjstw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ggvdinsv.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163uztnvlxq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163xfdpmapy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ohsqbxuy.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wxjdqnmi.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lbwysznv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163yggzjpco.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kwzomdck.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zdbiianu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ziolsnve.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163remrkmbt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rfumanyq.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163keseualv.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163rmhnstat.html


<!-- 参考信息 -->