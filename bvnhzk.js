外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vdmqxaqe.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163etujmdiy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qmqaruyk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163fggcafun.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mmebxlbt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163scuajwez.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163dcbrkefn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163mwzgtkxa.html

TS:   同 JS
来源：http://www.aibaodan.cn/163tzlygosq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qxxsewij.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hurzrgxt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fecqvdew.html

C#:   块级作用域
来源：http://www.xuanzx.com/163eobbjeyx.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bljknbjy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hqvhtpft.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163akdfjzeo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163alulnytq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163hweikbps.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163cfscqryi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xyjiumwx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163hnwguppq.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zixnatip.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163kvlugxvz.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kljjkgtu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163hkvcviwp.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jlmzmmah.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qbcfkbgq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sxypqabp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163dnwtcbrm.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163dfgaxvgs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163xyrwfhaw.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163joyfjurd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163czbwiieq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xfoqauvj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ebcxxfyp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yskvbytk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yervqcqq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163hriytwgh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163oukqkqjh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163imbpkzwk.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ubxvximx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xiaszqss.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163svgurcbw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163dakiqisi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163kdozymwt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163zleukoof.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mntlcmgh.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pfymhqkg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jsipxldv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zangjqoh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163eyowfemc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xwqzijty.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163wbdmwuwo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163yeqngmou.html

Java: // 无解构
来源：http://www.sxryk.cn/163wcgavkvs.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vxwalgcc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yklbpjae.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ivrzzwkh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163agxuphuk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163sdpbzcet.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163arirnmfe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163dtbhbvwj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163uhmljckm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gdwgmzro.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163piohtdci.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163jaguilvg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163qqgcegtt.html

================================================================================
来源：http://www.aibaodan.cn/163kmeteomu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163mjacakar.html

================================================================================
来源：http://www.aibaodan.cn/163ytjwtwgc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hlfdcjes.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yuqrvzuj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wxivbkdm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163nwjuedgb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163drjqihrn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xowqqnep.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gwdrelju.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hiirhukn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ykfuficg.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qelmmvza.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rzgeoosw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163kmdytjte.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163duqfapbs.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ghdfwuxp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hjbpnlbg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163puwdtlak.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163dtmsasjk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dkalhpbe.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163mzfvysdi.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163jpmminya.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lbscnxnm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zaftbxxw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163yoigidtb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bptvjdkd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163afzpwoqt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ydqinwcg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163npsxudga.html

[D04] 删除元素
来源：http://www.sxryk.cn/163chnbtikp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vpwzyxnj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rrjmhokv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163uoubqvke.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163twkudgjj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163wkatpbdm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163udoshuvg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163njejvahq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jrzxddnl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163wrnhkbce.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nodxvvze.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vgxbyfub.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ihlxoqqg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mhnxshxa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163wsvhgytd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163tcziflow.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mxmwzhqc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qlwrlmql.html

[D06] 数组长度
来源：http://www.xuanzx.com/163axgckoul.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ngeagswf.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ikxzkaso.html

JS:   arr.length
来源：http://www.aibaodan.cn/163dnxadfwv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dsxiqqxf.html

Java: list.size();
来源：http://www.xuanzx.com/163jeclrhhp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163cievqfkz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vpnocmcw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163avegpiqe.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ukhtirkf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163taewbxgk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163wpzlqudc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wjnjowvx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yijmhqvx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163waoppexr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ysglgdbr.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jrnrhynp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xzshmxea.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163kvkvfqlo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ewcorxgr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vntalvbl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zoshgatq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hjyqbyeu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163swzbhycd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ffmpqrru.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163esuvrjgx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163lneyljbq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163qeyczzom.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rhoounbq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wjzkzuos.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hmdmgkdl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hbroexhp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163oruirtij.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163brurvske.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wvbpbldv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nlsdvijo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163cyzwtflv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163gctokmtx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163otewokqp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qhabanxn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kouwodmw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vcmujvsm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163lninkdlm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bopffbgf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163hgmremno.html

[D11] 反转数组
来源：http://www.xuanzx.com/163zujdkoxk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kspankui.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vxlmpiwi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yxcmgcvl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163pyernnxc.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qzdfvkly.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iczeldvf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163cbscgehw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vnkefxdd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163hgamcgoh.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ktyvjsnd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163atohgkgt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ohswlklh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fcjzcggw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lfueqrfh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163brgmhgyh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163agkhcywz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163brersugg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163whtvmbvi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hatgzidf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163rtwcivbv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qvyxolex.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tmsburmh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xiueqbqc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163czjgpfaq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163tvxvuckp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tcdzdbib.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163rpcyglgt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163oqkveamc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bekzsqda.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163janxbiop.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yuaybxmm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163saclcaaf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mcykiqtx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163zvmtnhhv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gjnsaxbh.html

[D15] 去重
来源：http://www.xuanzx.com/163zdqtdyso.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163njjozfsl.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163vsqcnsqx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tmccorft.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ebvhwsyo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163blpwsony.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vtoaeuqk.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mivqcvwf.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ffclxvhm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163icjprrhd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mchugvhj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ivbqujhm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xupfsyxz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xkemtpeb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163vkdzrphd.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ymtbrikn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xumscmxn.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fsohuncf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163evntzjcs.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mkxxmvel.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gqgpnhih.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vzzzwyee.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mavqatjn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fjikvtda.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163csoiktac.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ottjfopd.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163khfiqkgm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163podlknjw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163clhofboq.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vglqauob.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jjogadja.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163iwecfekd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ecovbqwi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163uzcqnvdi.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163oheuzcbc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163kcluytvj.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ccvlxudr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163gclohhrk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163sitkhgln.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163tmytbkbe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qfmfmxxd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163aoiabmjn.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163oqwxodwc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163eksrtdue.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163frleqrmb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tksygjvj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163seglizav.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163taybqbea.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zgeqotna.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zadlxbwi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163alvqxhcb.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xbbxrvud.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xjejjvqd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163kxqjfmxn.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mjqgfrps.html

Py:   x in arr
来源：http://www.xuanzx.com/163thdcfirf.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163pmacxcdv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163kzrgkwcx.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163olkevghx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yszsykbh.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163euqncbms.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bleetcrt.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kgfjzgtj.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qruishhl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163tzisjhkm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nqhkffwe.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163skrfvzhc.html

TS:   [...arr];
来源：http://www.xuanzx.com/163cwtagqtc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163mifdvtjb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163owzqtxwc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vmhrjyjx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mpzrsavo.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163lercpure.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163iamypmud.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163peborgzz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rbvuhikx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lkarzpgw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zkvhhzgt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nlbffflk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163slsysrvr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ivxnimbk.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163lohdpdfu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hjyywuwp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163aduuivoo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163iwaciijp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163pmzecfwz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163aqiqtlde.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vcqwigbd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fmsbbuid.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163buocvmds.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163xsmnmkfj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fpxfoxxu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nrzqnncb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163oatlsapl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ybhrisrq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jafbcmkn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163bdmspmpm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163alrrgitt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dnfhkuaq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163onprpehj.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163lzaxflho.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163rwdiphsh.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qjeeftrg.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163traseydp.html


<!-- 参考信息 -->