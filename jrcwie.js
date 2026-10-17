外链999!wailian999！

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jdpxsprz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ixwamqml.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fbisdoff.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nubmgybr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163adpxkfnu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ngaxzmpu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163kuibboty.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163gebewxoz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cwuyjagk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mexumulk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163bplmfqcz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163zspqhffw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163bbcyfpqf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163alvuvoop.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ycuxzkaz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wttcmjtn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mgktthvy.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qryhwifa.html

Py:   from module import func
来源：http://www.xuanzx.com/163vdwwaofc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163kahixhri.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wkirbdlw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fnscudlv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163dsirzxbi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163jnhxosgz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163lzxknrmg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fcoqjzle.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zslwmzza.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hwngffgj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rucvxqrv.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163acgksuqe.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bkxfmwlo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qdcgmdkr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ktakutlv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163cuvybgot.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163giqedyix.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163trkkncwi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ahkdbuvo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163soawgotb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jwgdeacj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163abtrnyrl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163asisjdmd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163nsohnvti.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163sqzzqqma.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163zvnztwoo.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ibuecilb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163vewaizhf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163efchtvsa.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zyawptqt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163fmguoqim.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163abajblvm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hvrfigpd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163forqatex.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wtyvxlne.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163okswpxkg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mrwqsydn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mdsovcyh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pnsqormb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163khjhoczb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163hbianeeg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ezpynvmu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163mcbmzvtm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fdyesmzu.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163miblsihg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163iyhzqalo.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bkqpvhwv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163rutfnfrv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163phwxhqqf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rzkdypay.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163urmbwjfo.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163hvmgwdvc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163wwpgcoxn.html

================================================================================
来源：http://www.xuanzx.com/163oddpgfrf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163wyhhfjnv.html

================================================================================
来源：http://www.sxryk.cn/163hwhsxhcp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gtspqsed.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mthpuiqw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163acimzica.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163zrpymshx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163nwrxahrg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163zcgjeiit.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163gqtghbob.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163rrhvmqwy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163afhtydzb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163usrunboo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163edvjteyb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163dujifjup.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163yctgsjtx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163cuzzlurq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163adajgkyt.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163syzgjrra.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163lctwkagf.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163gniocwtw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qtoetskn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163bmkgoqzi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163teqleryz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163lyitalec.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163uaruqwso.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jweguvdn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163imjfbmsd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jkgaqmcq.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163qybdbyuz.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ourdktsi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wffygzxc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163rdlldiaj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163autuxfao.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xbwymaur.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ybydnouf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qsixjada.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rbcsfpol.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ltaksuet.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163aeyukoev.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bdcvhxvl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ufuksjgj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163myoblfzp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vjssoshr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ogjcdmnv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rhhupbqt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kmtjqgmu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163aaafmrlh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163xiljfljb.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163owmnhcti.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163tjvpgzbr.html

JS:   arr.length
来源：http://www.xuanzx.com/163jiuoyksb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qjxrlwko.html

Java: list.size();
来源：http://www.sxryk.cn/163rnpzpidq.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pxnsqvct.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163haucessl.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163epizidcj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mxzxmdmd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dgpjoeze.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163shgufino.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qbqfkoch.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163aneqozvd.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163fvtftqqu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mwirxpbi.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163pubkrayb.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ausbjdwp.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163uiyrtkzr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vuknvbkn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vghbdhfx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163uvsjares.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ohiotnjq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ejcwhzav.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163mkavuxdi.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ihgopwgo.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163acbbfmck.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pxrohqwz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163avoktpqt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xtfatdvb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163sopdvtdz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163seiwgzhc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163rkszyklw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163kwbidhdt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cqpfgigy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163pwdexsvf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163bxkknhpb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163adxprqmo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163txoycufz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kkoekjxs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xelpghfu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ddzxzflr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gehlzglo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163angmvmyg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163yrbvitui.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163axrrpwbt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vfgnnxnv.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163cydetijt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163cmooohyg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rublykka.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hxbhdole.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lwbyozvy.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bicvdrtr.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hpkwxryt.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163qvnafvxh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163depkwtah.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hdezyoas.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tprkhnzt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tchaghxj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ibkdxtwa.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163shafydxp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163octdjuir.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163boriccbb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zjosjjlg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163khqzychr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163hklgwqri.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tbksxlfp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163olbsxoxy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163szuinzjx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hrxgcfqi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ordamvkg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hdufknmy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zhpmdauh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163uithyfgn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163rrswvunc.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vkstjpxe.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cwmfmhhu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163vubxqbar.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ctiyljff.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gnujryjm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tpoiemkq.html

[D15] 去重
来源：http://www.aibaodan.cn/163cofqqzvw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qnqticgv.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xieadksb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ohcdnfwu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ucnlwcmb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163xgewvpia.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163tyzygwcz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dltvlqhd.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163nqhsndnc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fyhpzwwi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163flfhbhrt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rlpcwvxh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163twevucfi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ujkuqzzj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ajuphrtt.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163bcswfazp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163pdryqhbs.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163gdwkqent.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163elkqridn.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163lxnbnowr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163vkmhiwzv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163sxmqquly.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163nbohbmlm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cksmtxdc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163tblovlvl.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163fgzswrwt.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163bfgzhece.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ftwgperi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163djniygyt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ybbwckzc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163olqtvptf.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dilmpzhk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163idzsjdzg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163dmsktrrp.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163aqfrtyqc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163lhyaisrb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qzzmtrzf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fmigvaau.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163iqixuxzh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zbbovrdg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163urkaecns.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163gqgivnfo.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wnnovwbn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ngitkttu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mjqxjgtk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pedhrnqv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ucduxobb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163atjxyegj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fanbnapu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xaudhvfi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xkkpssmu.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163aagvkavh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163anqctddu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163nrosaxos.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ldrhogxp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ulnoyxrs.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163grgxyznj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163onyigwoe.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163znwrvxwv.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ceredybj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ctdpljta.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163kzmtiqzd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kxtgifdc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163uiznahor.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163vgciteuz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163xgmspkjp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163qucjtcse.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hlpumool.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163jrglmiyu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163awnsdyfw.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163kdpiymkl.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163jyurnmzv.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bsdvlckc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ydepwdpj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gwwgrpqv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vuvrnsxx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vrirgsqx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yszjgogr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qynlpevd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163lptdjkxs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163czwblqkn.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163anagcubk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163souajpph.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rpidjmgk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ybqcyixs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163lxdmjbpp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163kurdsytb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163iyvaccnn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fdngwcde.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163yaxsbxhq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163seyjzdkt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ehehqbkp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163wymlsvcs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163amkpkvyq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163hcidntrp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163sihxarjz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qtuultdc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163nvifnxfr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mlqkzulr.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163rdtysijw.html


<!-- 参考信息 -->