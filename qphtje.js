外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163twyrmdlq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dokcrfnz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163czzwafxc.html

[C09] 递归
来源：http://www.xuanzx.com/163zlkuhwgd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163knfgukuz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lwwygxyx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163csfiuzkq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163joktgdof.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pnmkjkqz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163cnhdlage.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163dscmyvsv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zurcvjim.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163sacdazoh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163pvgdngic.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xopyipxe.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zxhtjcwv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yheuwvfk.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163zffmqpfc.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163qcftmmhw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jcwnjyqd.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163pwyycuqz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163veekkbnd.html

Py:   from module import func
来源：http://www.xuanzx.com/163saefcckc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qxorxctw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163btdhhmct.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163roebzcei.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kyeoyjqf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163yvgwebie.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pugnhssy.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ndprlaly.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wvohpaqa.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163acqcicfn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zpfcxjpx.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kysbiwhc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vqhjitdj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163iwsczeej.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163yqkdpzze.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163eiezztxf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ihkqhosm.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163undgazuh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163iotzyyma.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163savabyeq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hmdgryqd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ujhspnoh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bxpoluzl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fcjcrvhl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jjthknqs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ubpjfifp.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yrxwofqz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xuaalqkg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163amkmrcoy.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163vfdjdyue.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163xdgnibeq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163kprbnpyn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163smpnfwut.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163eghjvrsp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ecjwwota.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163fisdnjkf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163dbxpbnft.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vudxdwdp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163iwcodhrg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ntqvptry.html

Java: // 无解构
来源：http://www.sxryk.cn/163uucotfcs.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ikrfkste.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163emrbhjxf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163tosnqdjd.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xfqpblhm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163yluciyxk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163sezsjfts.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zcplfpfd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tseabtaf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lfhkdrel.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163juofzxjv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ifghsoft.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xudbujwf.html

================================================================================
来源：http://www.aibaodan.cn/163ccbsetru.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ursznfxn.html

================================================================================
来源：http://www.xuanzx.com/163rnglowgc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163yvkmljrf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dhgqfhib.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ixjwewrv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vjseqflp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ygjuvqgo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163afjtaygc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wdrtszir.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163yaliqglu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zzqvamqk.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163vjkhdrvq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sysgahaj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163hnsnzlkf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wstufzeg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163azcsyuiz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163amavvsgr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rlxydnox.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fsqjnolb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163totbyubz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163tyzbijfc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163lyhikzbs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gbgglxda.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163pipyvdrp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ppqspqxv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ezjkjtvv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dnergobn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163holmtjyx.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163oiardxfy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163atnvfins.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jdwklfxg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ziuvrtww.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163tpxwvcol.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163evtznuff.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ectamhui.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gqnbpovc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163buprvfof.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163selraako.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163jdcpxxgd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vnyjwlul.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163kqiuxjsj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zsjuglyd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uzkqupuo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163spksvtbr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ingvovck.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nxvahvwg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163omvoyobv.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ftddtypn.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ogugubsn.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kmuatgpf.html

JS:   arr.length
来源：http://www.sxryk.cn/163mupajbtz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163frhfflox.html

Java: list.size();
来源：http://www.xuanzx.com/163jldkdplp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jpxprvqw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fxhiexwu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wfmpsfzm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163lkzhwuum.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163jglqwjng.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163jertpuoj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bammsciw.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ndetbxhw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jodyzegw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163cniuzqtd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lrdsltfv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fluxosag.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kxdeenvi.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163njfcmgpn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163oqnifurn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ltxdermo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qtaqjoqt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nyqrhvbn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163cghliwzk.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163odgomsav.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kqphdryf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kiprlxcd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dxqfmtxm.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wrpckwuh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rfoaxzxi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163buuzstst.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163neghjlnq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163cbxavppc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gzxeylul.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ptbhuain.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163zxqdpgca.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ircyycpl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163fgsozzgy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hhubezct.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ghgippta.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qiwdrvre.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163iorusoqd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163llpyeuou.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xejxjwjt.html

[D11] 反转数组
来源：http://www.sxryk.cn/163lfqxfuqj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163mooyownw.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163blndajzu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ghsgkfjh.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163oahljipy.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mlujzzyu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163olkpgllt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mgvuijxw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163lihjtmhs.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163dpxzdptz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163lxzaenap.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163gdooobto.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qzpdapst.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ajorhtwi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163blfilkxm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163yfxcywjt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lmmziuut.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163upsykwrq.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ccaaqved.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hpseyzea.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163yhkkkszw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gdrxvkbp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dthjdiff.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vtznfqag.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163yaiidxgl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ymbbirxs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163quaiwxia.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hzrzypss.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163piaaevky.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rjruwwsf.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vyseafrn.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163yovfkukw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163bftppidc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ymuuavrh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ioiitamh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163sxzzlvia.html

[D15] 去重
来源：http://www.sxryk.cn/163resdsmdq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rxtxbvjn.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163wwcrtufk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yheiqpwk.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gxbzntwf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163igwuphzm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163yvzzqnvz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163uzjicnat.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163orylibog.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163giayzprx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fxtkmtqc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163nptnrxfx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163oimxcflc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vezblytv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163srjoqwiq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ednwqtan.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ewqvclgz.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dzfunwec.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163oxuqducg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163spmunxkh.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wsznwnwx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163fxxeuukv.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tegczgel.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ipbyhbsi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163swdoopwz.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163yuddjcla.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wdlatqim.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163pvmmtmgm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163lsupjfpt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163zxoisprn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ftntxyxk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vvgbmxrk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163cmowlbmm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163idmhwrhm.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163oewnbuml.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163gipwxatx.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163hcvyvmvh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jmjtjles.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163slgdjwek.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jyftdhay.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163oawyxikg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163mywqohxf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163pghbwmbm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163bclqkvdi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vdyyvyka.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gnrwfyqq.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163eyuilhyd.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163awdqcnpy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jqzvdryn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uegjlqrg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163llwkxtix.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163dbjuyaic.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163xbsvqdke.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163pmcihtld.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163bcykkhbj.html

Py:   x in arr
来源：http://www.aibaodan.cn/163mstniddy.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163afvtwjty.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ryfobgwd.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vtomhxfp.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wesexhrc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mhgazkqf.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163aktakjwo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zhaakkqi.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qyxnalsc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163txcbfbey.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163iuhdserd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vddrvfab.html

TS:   [...arr];
来源：http://www.sxryk.cn/163nivbfdoi.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tqbwppvi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163gvcvvhez.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163yvgbbxyr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rvrywxlv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163gyjpgzoi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163exciaieo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163raxckjjk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163flmbihky.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163aprsmunh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163cuwoevfd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tvmqgiri.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ygswzuij.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163lduaeopk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163eyrwffty.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163htnzcvry.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163bndyckup.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163epffcerh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wfbztsgn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163yijuqveu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163wpcrumzu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rslemdra.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hszjrqxo.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163dlkjwegd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163pnhsbvlg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xzsvjxgv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gbdiqotx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163urzjnunk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163zoxnqnwh.html


<!-- 参考信息 -->