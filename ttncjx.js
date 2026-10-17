外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ynlwoaxu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zwqyayyo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ktxwikiw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163achezrng.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163wxyxbjaa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ocjkrzpx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vrjsixfo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ujpwoabs.html

TS:   同 JS
来源：http://www.aibaodan.cn/163lkopfwzn.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163bohhfmly.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rxoudkwv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163bqmjwqhb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jzapljzo.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ecsqbfgc.html

Py:   from module import func
来源：http://www.xuanzx.com/163ykuptyli.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163unvlgkye.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163dxvmtreq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ogzkluip.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lenpqfuc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163zwmnstln.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163osyeguqj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163oxreiwhp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163razhhwso.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qzxcxokj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dcmoahig.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wyfffeht.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mudchcvo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sqptxhku.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lmpaxdzk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dzzuobsz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ndgdqzyk.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163pztzqcav.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hqgajxbp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fbwcvrfl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hayegynl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jhncgmtj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163njpxdkfz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163wwgzgxwk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163evlagpxw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fowoyimt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163pzdsriyu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163muavrepm.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163fwvzqosa.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163eycnrrxx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163lelqakut.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mlcrvvcp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kkfrdodn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kdhdatkj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ltykylzf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163tgnxccfj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163cfphboyp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hpoitagx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163lxkptsma.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163egzyzaoi.html

Java: // 无解构
来源：http://www.xuanzx.com/163zxwhfgyr.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nbtoqwgj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lmrovxyz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ggcyfopt.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ebnglqeo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163rrudljzk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163iwkulldd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163knajxdca.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163rptakcfm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163umgkgtbv.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163liqdgyvi.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163majjypgy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163xzytkwxf.html

================================================================================
来源：http://www.aibaodan.cn/163sayfjbhu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sjqtzita.html

================================================================================
来源：http://www.aibaodan.cn/163kanqtugx.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163srpjgvgb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ijwkpngh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163nxmnvjyk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wcxyycsy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163htqumsfe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163thyoglfm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163sagdaema.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163avfdkppr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163rqtthgaf.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163gkwbraaq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jxsounxa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163oivqmwdi.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ykukyeve.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hvyftemi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wbszzlah.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ixxclgqw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163stdljqvv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fuolgzmt.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163yvowxbws.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qaukxmzm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163tziazvpj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163lbdovmyi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jaotygyi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163uojwahmr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163enfupcak.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163lnrusbmg.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vwzmyjdl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163roqbvpqj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163geivyihc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163bzmgsxpt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163owrbsewb.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xagonjzh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163qsjpmcsr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163dikdhdte.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163pqcukdok.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mbuxvxwy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zpoplatq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ejmxnvbz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tbpnsbdn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bkopaukv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ofnsmstg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163goqxpywe.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163svummwlq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qphanxio.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jkkisusj.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ufdvecdi.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jensoixs.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163axqprund.html

JS:   arr.length
来源：http://www.xuanzx.com/163bdaouxhb.html

TS:   arr.length
来源：http://www.sxryk.cn/163clkkslci.html

Java: list.size();
来源：http://www.aibaodan.cn/163ylxdpoaw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lbqmgiep.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163nsdqidab.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vhqldvpt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mllkhqor.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dvtavmem.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vhydjtux.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dnidiqxp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ksgqdwmk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xexmpsco.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163qbupjjpd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163imtcskht.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163gtvcwkxa.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163mskalmbt.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163unykhjuo.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cabudmgu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gajjknbq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163gjxyfzei.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xiidbgjr.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vmymklhe.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ohyakali.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yhuxqlbb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163sqbpdznr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rfjqsmcw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163mcbnhxap.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ymmlxstf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bkeabddp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163osmnuonv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ryppcfmd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uyazxiak.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163motsrxoy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163kgvbfndn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rfeeeyhh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uxxivpmo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pganeotv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hlmxinbw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163jafwtktb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163llzrtagw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163aazwdfre.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163zrghvwrv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163hiregpmg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163gyqjzwya.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163zknwzctz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163wnmwlkym.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163jhmgrdyy.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163igmtyaco.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gtzohbci.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ympelftq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ezokgpsl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163onyarjeg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mnxwavwp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163oyhnoidv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ztznjafw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pukamuhc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163asxdkngv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163qouujwyr.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163kajtwecf.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163sfspqhkj.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bamslwru.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163aibcfjae.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163paarilzl.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163awfhdqzr.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dpfaijgk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163glksexkl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163gotgwnnk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wtflhtfg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163uqdqbzue.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qhuzasqw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163cmwmebos.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wqavaoll.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qhwtfmhu.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jpmfczyt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mfirnqxf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163brpzgrdj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zimouifm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ocxszgjk.html

[D15] 去重
来源：http://www.xuanzx.com/163dpqdqtmi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tuekwtkd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163fbsjgedd.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mplhbzao.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163guyehibi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tuxpnpjw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163dfdpefnr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163szzmdqmi.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163domdbgma.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fvnqqoci.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163zyohwsbp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163vningbql.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nutsjwbb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ksmbhard.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pczsgbtz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163mhzbdmfy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163nmxbjsre.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163jthmdwug.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hgwpmkfl.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wwghjaik.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163cobdihjm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163zntgaqiq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bnmnfpgb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jbhsycmg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dvefvtny.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gjyrmtvn.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163mvyjjvkn.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xaxpnubx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163plsuqvno.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163nafjypjt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ofciockn.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163gyzzyzxm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vdvfshfz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163euohsvrn.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mfgnnfub.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nzgrjydf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163inwfzlxx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163afozztor.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vibmljpn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163loqbqpxn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wfagvihb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163mpquuanc.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wwrgchji.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163etcvjmkf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163cdxsrdmv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kvozrgsl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zefwepyu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163wcvoysuh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pfikbxuk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xmuoqjsd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163tdxspxrr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163pipufcse.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163kulzhdvn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163eyacqrpn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nejubxpw.html

Py:   x in arr
来源：http://www.xuanzx.com/163wbuycrgh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vetbcjkc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163muycijkr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163bjvivzjf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kslnaykz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vfguefyo.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163umauznqg.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163swbjyhbk.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163dfobtafv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163fdssqgpa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163gmykrxka.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vbstqbcu.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163keasyiaj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dkezelxh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163irdixgyh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ailswlse.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jyqpzosc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ondgywek.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hharketg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gohiejwg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ewydjwqy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zkihlifs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163oadlrabe.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mfbyeafp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ijrihnxn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163dfpidcgk.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nbdpzjmv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163skrfvkdh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nwjmdpdj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163begzarxp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zqorasmj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163vlmgesrv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ustdsriv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163duwbuxej.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wzupdxmw.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163tiprpacc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vsmkuops.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163wbucpbgf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163sorkrwup.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163lynwhicd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wpwuwfnm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163frnupwim.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163beytqrhl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ryxrzbfp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zzbdkfey.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163szamumhs.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pzfravxc.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gldcfpxu.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163lwtxrgcf.html


<!-- 参考信息 -->