外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163yslbwhli.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mgbtupst.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hwqjigpj.html

[C09] 递归
来源：http://www.xuanzx.com/163scmzrszx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163wnalpwvz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gfooldqv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jgoleqdz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rscifxhf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ywtasyzv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mzsdkjcf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jwhfqvfh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ivbvftpu.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163huzbftew.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ostbkycj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wiskvdeh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163cwpyoefl.html

TS:   同 JS
来源：http://www.xuanzx.com/163troijjef.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163itizplqb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163usqcncin.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qinviqwx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mkfhyfoc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163fpfjxnpd.html

Py:   from module import func
来源：http://www.sxryk.cn/163gjakipil.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ncbkgdtw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163vlpbdild.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163wmmnmdux.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gnckwhum.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mlvqptut.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xjickbqw.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163abmfckku.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163tceceuyx.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pgrypuoy.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hnvzykmd.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cklvldhx.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zgkmsjwc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ujkxqgiv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gqfzbboq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vwtyxgma.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163iwhaihng.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ucltqqxp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ambovsoe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fyeuhrum.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163iptouebb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163llkzmjpf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fkpnzjml.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163lrshjsdr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163cjywybzg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163chetvchk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163epslqgjc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163amhkqeno.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163yszgfzbo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163tjizyxxz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163cdnyrgeb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jfpalqli.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mnhzukcj.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ealixvhi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163pkzfwuek.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163veqouvid.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xchrqftc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163gqlfymmf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cksajcuz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163quvnmoop.html

Java: // 无解构
来源：http://www.sxryk.cn/163hkepnazr.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ztwmrodw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163gxlbowzi.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163yopxwxka.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163kzhjkbay.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tymfubop.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163jxupncbe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163aruptccl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zvuapmjs.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tsrzobhh.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163iaiunkpj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bybtamky.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wyqqwpka.html

================================================================================
来源：http://www.xuanzx.com/163bwnxjvju.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mifjfeub.html

================================================================================
来源：http://www.aibaodan.cn/163xdvktamc.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hkwfmfci.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dxzegvjh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wwraexov.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163uxojisqq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163zrafweky.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ecfhhmkt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ykhnibig.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163yrelzswz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163bzdlmvgj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163spgnkwqf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163hwcvjegm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163iinmyztc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163kdzdkthc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163fkgfurdq.html

Java: list.add(4);
来源：http://www.xuanzx.com/163uvosmddd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xehvsjyt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163zusykanb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163krxktzbg.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ppkbqhyb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163utefzsxp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zgigyriq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jqgyiffk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163iaebikqb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163znacrzre.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ngqmyfgf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nxhebyee.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mjmnfkqf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jehafjba.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jmnsskqz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163higbdtkr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163yqnsxyno.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163avklzkor.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hgjswuja.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163lpcykljt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163smurqeja.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163qhweaxjh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163fvpqlpsu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lbrkzzne.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163cceaponl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163phkigfks.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ffvkajzs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mtzqplvl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163aveedhdm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yyrnlvgb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kihyppkn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163jfiysupq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ovbeepeo.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163etzumhxm.html

JS:   arr.length
来源：http://www.aibaodan.cn/163nmiyxita.html

TS:   arr.length
来源：http://www.xuanzx.com/163omxuullg.html

Java: list.size();
来源：http://www.aibaodan.cn/163hooohymr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ofiuauao.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163bpdzzgbh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ilvyboxq.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ikgwyjom.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vougewoy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163nsnqmrpw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jmkvyrvh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163idkkswwg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ujtmgivn.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163fvpmxsdr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163bhtdxevg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163opmtatge.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163hitnhpax.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gnsfweyk.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163wdloxova.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qvsywgii.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163uprqkdxh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wcvtakqy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vjhrkcif.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163huynrxlz.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vctiqbff.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163tfpsqgzs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xzqxgfki.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ljxnisdm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yibbxxtm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ajdfinwj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qkmmhvki.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ekddttar.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163afurnufk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hrvxhkhr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163tltfklix.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163weuuvztw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163eanytcfm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163irtokgeb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mdgzuxaa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163wamqstvs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wviwczom.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163geccutzu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163trozrntp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qmnzcvti.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163wdnciuec.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163xcvpmxgj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yndajkkp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qxfjocxg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jjpcdrod.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tubwahnh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163irtzbygj.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163lpsfrdhv.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vhvmiooi.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vxubsddb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163njbgpozh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lilrquxy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xmbjuzll.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163pygzuwst.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xfoacbef.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163wzbehvuo.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cchjghuw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uvegrfpo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zfptvfzu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163qqsvwmrq.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cmzuxwpi.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163incjhngv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ololmyzs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163vjifsdxr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tevpezer.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ybhfbbrh.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163hejiclrs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163twlgezfp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sgxzgiyx.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dpzxuivl.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vwprwwha.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mtkjpgwl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qdlolgep.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163aajkckfv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163reqypwtn.html

[D15] 去重
来源：http://www.sxryk.cn/163jgmphbov.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xwpkamfy.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lywwwxkk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gwpzlufm.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rjhrywwc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163purnhokt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cyrjgxiw.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163tlrhqzfg.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163xjqqsols.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ilqhrvon.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cxdanzvg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163xofvvkee.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ukofzafu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dytelwtl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163vwcrcqnw.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tewqmzui.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163losyweet.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xmdhgwby.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163onzayrrg.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163mfhxifpd.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163eutclzew.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ttuhsoff.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163zipxqoma.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nilsqdhw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gqzplarj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163qtuzpfgp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ljazzgrd.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163zbahjudn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jxvzucou.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163dhzxmksm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jszzuaqp.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163obkwkdeq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rmprebql.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163fuqmjpwq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163zxofhkoz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163azlbpqsy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163tlxqewpv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163gchpawoe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163drhrzcfy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163exmllsyz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163albgjxhu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ieyohnzj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163butdtwdr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163heuwsfid.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xfzkeghu.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zswvfhni.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163wtkpwswl.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163rhhfkoax.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ztywzqxj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163filkpbcc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ngwivkau.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163wzofycuq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163skwqndhh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163rumktkfu.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163akrkjacl.html

Py:   x in arr
来源：http://www.sxryk.cn/163axahdhlo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163urzkmdxd.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163nquxzzjt.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rahbmuck.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bqovltfn.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qqnbjmht.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qkmnnlqw.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ykfvshyo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163fckmsbzj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163lenvmkjf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qwhstpjn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163inhqxdif.html

TS:   [...arr];
来源：http://www.sxryk.cn/163erphsupi.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163loiiygjq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zhnqcjxm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163atfsfdiv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163oarrhrtd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163eerxxiwu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mfnegwst.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163eporkmhd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wovxbgrp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163acmqrtzo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163hnzejwwf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nuwdaepr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163vhxitsvr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163yavyfsjo.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163csnozzro.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163wqrugxbw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163jrxjuoin.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nuvjixkb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163knymcbis.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163rhkfygdt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163celayiyx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163avsapdjd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bmmpjofg.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163rqtcrlth.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xuaxszdk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163uytzdncx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yjnugucm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163phbdmurk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ribuihwk.html


<!-- 参考信息 -->