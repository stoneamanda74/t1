外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wkeahuwy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wtpocwuf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kiwbrrdb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kygabsae.html

Py:   return a, b
来源：http://www.sxryk.cn/163zckgwvmo.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nulpzjjx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tpyyldpd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jmpxzfjd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vajsmrcs.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ecrgdvog.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wbakasbc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163zdjaatbv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163eeedjphr.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jncafdwo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163idxytupt.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pwodpdjt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zmdwhyjt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ohivchtl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dtybxxqu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163oqebdmwe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ymfxueex.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163uzxxnjoc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qshivsfm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163nmftnpjv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163gskmmywq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163hnphilqb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163epgnfrwz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163mulagigu.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kfchxidp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163uqfmbghr.html

[C08] 闭包
来源：http://www.aibaodan.cn/163flmsdvwr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163xlgwxmpn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mbhjlgwa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fyiljugg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dhnbnvjr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163aeslcewe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163thhtewec.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163kabbmwko.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163spfdbzji.html

[C09] 递归
来源：http://www.xuanzx.com/163oszfjeuk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ytskcxye.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dfmsdmep.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wejdhdqm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ifrpipjs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ekeyqwqk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kscsnyaf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163nojfkcaf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mebbshyo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rebdngmi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163egplicqy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ogsphoce.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ctgpjbft.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fmnniejb.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163rcrbzrsu.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163sizvcpbo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ynpjmgpn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xrgwmqdp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ujsmzzja.html

Py:   from module import func
来源：http://www.sxryk.cn/163zpgkrneh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qvvdgcjz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163idbdhllh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ogdtzspf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hmtoxrxc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163cqltrwls.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163lwuknuui.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163pdxjgops.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jldwbgrz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163twapdaxl.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163nxrygdjr.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163utesphpt.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163crqyixvd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163unwfutdt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nibnhxbn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163hzzshqwn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gnfiwwyp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zeouakou.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163nwpslosd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163oszvvydx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vivdxzxm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zdeztplw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qespypnh.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163iwhssvko.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jgnumhsu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163sbwoutci.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pyodzisz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rkhipldo.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xziersje.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163bwgbvdmd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163uarhktri.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nyywuyrs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163suqllild.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ajgbkval.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dofuttbe.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ymzgwyyl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163wffwxmkf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nuneyygx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163awgfbfza.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vxuhnqrp.html

Java: // 无解构
来源：http://www.sxryk.cn/163gedehfyy.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nfdjutsa.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163sejukljc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zpegnwjy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hwnrfxcq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163nvwejnov.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163kahkhdsb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163kgzgnrmz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163dfgiarym.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163czgyouqr.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vtlmoedr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jhlaymzf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163afiwmzwf.html

================================================================================
来源：http://www.aibaodan.cn/163cggbafoy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163pdzkiwot.html

================================================================================
来源：http://www.sxryk.cn/163ovyoaruj.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163vllwhfcq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163klwoqbtk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163atitqxid.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163leamaupw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163egadjxhp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163orgolska.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163gbcgcfed.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163djzjtisj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163pxwihjek.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rceeypdm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163urxwqohf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xmvqtvmz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163rdyzpywp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ddsdkinh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hxvjesmz.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rqkvxzej.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163idbeocnr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kljpqese.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163nhjdoxnp.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163edkuenlb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163zpggqemx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163eoirkhib.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vgplkzbs.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dnezjonn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163easzrsrl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163tdsyahzi.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163bcxqgssx.html

[D04] 删除元素
来源：http://www.xuanzx.com/163toihuspt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163gremrtgj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163oejxmgoh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163mfgzxrdg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rvdscily.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163aswlzyze.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163sujvfqyd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163uqtuorxb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lzyofsls.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163kbmyrlud.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163sosvtflg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163dnzydrao.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163gfqnnemt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163neaekocd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163bekpedki.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163hplimlvt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ritfrmii.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163cjwqbffn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hxsnskcx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163amqxqlkj.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163yfgmlekp.html

JS:   arr.length
来源：http://www.sxryk.cn/163mitgwgup.html

TS:   arr.length
来源：http://www.sxryk.cn/163hgcbpruu.html

Java: list.size();
来源：http://www.aibaodan.cn/163pbxnvrlg.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vhdqwqlo.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163qpqklogb.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jeegsifg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163tzvvbcjf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gxewoolc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163nmmukboj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163oxenqtll.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qqoolxfs.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163pifpeply.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zvlbtbjc.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163pxyehafi.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163oelkxjvf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163sgjqmhcu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163evcketmp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163aqttbtan.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gvuhizeh.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163iadtboog.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xxrbhfit.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163samzbhiu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163pslpgozv.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163aldiezgz.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fwhogjla.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pwzjbxro.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163amlljwgx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163oflrcdup.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163sbsxgvxx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163vgykontr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jytyxnvu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sllztnio.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163gthgwzcf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163bfmgkjpp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zykmuyjt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rcthadjz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xvspzuzn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163irsmxtci.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163thvpuyzr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xbstjymd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163lixbldui.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ueroaqfx.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zxygzbkx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163tsgoidyq.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jvgrzgjl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163nvhdnxsf.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ofthuwvl.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dbymzdlq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ongwpkmn.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163cctqghuu.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gllllrtz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163brvrylso.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163pqgcdcco.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dyneyxwh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fejdajig.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zuvfzyed.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nsgwqifq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163jcnbfnqy.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163rvzoopjd.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163dwcniecg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163xoilaydf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163tlyiwabr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163lieinwbg.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ggmnhiue.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gfphemdf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163rptbwlpt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ckqrglix.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163yyzraouf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hfnmtgvp.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163imdslohr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ilxmltsx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ijkylocb.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vknvifok.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qtkxseer.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xaggkrqp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163aiodvgrl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163udabrsib.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163acjvfkke.html

[D15] 去重
来源：http://www.aibaodan.cn/163cbxasjws.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163prxniexk.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163snawaebq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163giyjnnno.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163cijgdvcg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163srkvrktm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163xgawqqfz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xvifcfku.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163tquqbxwk.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jzfpowvl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ssrmmijm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163pyqpadaa.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ytbxwbzc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163kxyptedm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163phrefaas.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163lwzdqbsn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fxfmmvsb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163isvmjpui.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vsorfadh.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163bqrjonur.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hmlubjbv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163agnfpgod.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bxyanfut.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163kdnrvhxz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163trakvqen.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jfqkekfh.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qovbhyyg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jxvogosk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tqfnqjjy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jqgycmsd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qrjljadv.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163grqmswwq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163aowrvhki.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163eswzygom.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163rnranxac.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ravctfiu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nwjukyli.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163uhkkryuk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wleutmyy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163qujeqhnh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ucgkrigc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nluffdev.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uxmcdyxh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163iuvjxqee.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163frgubzdd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qdphaogl.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163uxmrcvur.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163gicelndr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gjqqjsfc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mjbnlwmb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163brurwtpa.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163jfelarhk.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163elqeeotc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mrlnwems.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163dhyquiao.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ffncbtcl.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163kavxrlgp.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rpojssma.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vdxpfrbo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tuahrfiv.html


<!-- 参考信息 -->