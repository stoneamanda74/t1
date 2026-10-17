外链999!wailian999！

TS:   同 JS
来源：http://www.aibaodan.cn/163popeyzjg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163yctoyrgy.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163yyfnqwst.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163gmxbroej.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mdfwmjft.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163xevedstw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ywsvudfn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gxphrjzd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163btvijier.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163pdttgjfo.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163sryfbjzf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163oxlyexpk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rndvojjd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bfqajfoc.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163jegqoinh.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163barbvgbo.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ibbyekgf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163waawbnjv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gnogtqow.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163gpnvyenq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163eydbotlh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163cbbrkopw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163dxapwqpx.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kengejoq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ahpprtry.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163txxprvkg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ckgizsam.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163aqeqqxvz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ddbgqbsl.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163apxihyxy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nvmrmuvy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cbfjhyyq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jrcdfspi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qaarrppt.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163njwrfwzn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ybxlppsx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163jobrwkwy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163uxlsyzrc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163dvijmolf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163wjmdoxgq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hjvfkhae.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163pmomxpbe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ufnokbzc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163pbmcpovi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163xncjmgga.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ugtomeew.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mzslzqym.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fkaymncv.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rkrnjrdf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163nrtvslwn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vlinqczg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163plrmjckt.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163chrowhko.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163nngkoyde.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163waheommp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163yuebmghc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163rvrdkxhn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163kkikukfa.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rxmzeqff.html

================================================================================
来源：http://www.xuanzx.com/163eivnsjgh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163tcqdpzmt.html

================================================================================
来源：http://www.sxryk.cn/163oyomozrt.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163esfovvjr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bxdiitum.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163lbtoehoy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mjqsnneh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tsfwogty.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lffrkcxc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rdklvbam.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qcjprupp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163evxyzkzq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xxnpvqrb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163hmzmkqyb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163shxzkdyu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163lskjacrs.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163grapauom.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163sthajvwx.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163etlxcixm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rkymqryq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ffpbqouf.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ionuwmvf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kwiiiqsq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163jcqxiswg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jlsqiahf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163tqtddwtv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ribgttcl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fqfbtwri.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163efprgrle.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mbkjmzpe.html

[D04] 删除元素
来源：http://www.xuanzx.com/163xswogdrh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163esdmuqbj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163apdqmkkn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vzboucht.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dhzmjpeq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ksahcunj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pspileix.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163cfqnhkjp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163uqeathxi.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163rkfsdbuf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zygjmgvl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163smnyoecb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163regirxyw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ckaqmfru.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163smjrxmno.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ykduuwad.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ndnhguvb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zpfqownt.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163yslqkbal.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rphprcni.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163kogvfjvj.html

JS:   arr.length
来源：http://www.xuanzx.com/163vzxotvui.html

TS:   arr.length
来源：http://www.xuanzx.com/163jcznkieq.html

Java: list.size();
来源：http://www.xuanzx.com/163mgaspnjb.html

Go:   len(arr)
来源：http://www.sxryk.cn/163gxxzgvze.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rdumchvk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rfdcagqj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163saiqopec.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163jnwqutln.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163faezdxnj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wvwmfbmg.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mviaihut.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ntktvycq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163juqndbna.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163aodlcqzn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kfynbqgl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163hdfkxxue.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163mymymrpo.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ghmpibhg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fjvjnuwx.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hoctryjb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163unbemuyy.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vcwrkscq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163exyfnrud.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rfrwkurb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163nutcacjt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mmilpoxj.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163apjisjkk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163dcyxzptu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163pxahrkvt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xuvpengm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163bmcirdzt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163atcaettx.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qpszpoyt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163spabgwsx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jxrilqky.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gxamsfjg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163szelnxke.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163banogfwr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163etqaxsnt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163vvojselz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163vhvtjmbz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163dsayetyh.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163kvetzbju.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vzlpzerk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ktadvlck.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163iqjbnjlk.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ttxwxdip.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ioicwxer.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163rktrtmzw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163zqqshwea.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163njypvevl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ajcfwdvf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163gvyqvtpa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ewacantd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qsrtnsnj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rppoojpn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163dvdvfamx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163dkhrqwym.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dujwkqbf.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rgswxiqg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rcvwctdb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yagkxvsn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rrdviwzm.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tbvwdlwf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kivvwouc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163kbnphzud.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ddflgfra.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mvuhxdkk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163epjjbxtz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163glisjikb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163iodnsuvr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163bttakwxj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ajllurso.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ysaepsop.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163gdhjygee.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uuwavmpv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qzkqhlpl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163owljyqll.html

[D15] 去重
来源：http://www.sxryk.cn/163urplevom.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kxrucsbg.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163llgmswho.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vjtpzcum.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xunwuafy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163lcliqmxj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163cyhwnqlc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xrhypfvl.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gfgmwshk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ireebgiy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163dbctsluv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163nmiuplvr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ahrhjfau.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ynumzggo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163smgjfmnn.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163echmiwaj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163hqmfitlc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zqnyfguf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nfypkxto.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hcbsuvoo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hwzfybfw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163qoehcnuu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163zkotgvzm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bbtxkawz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163psqnsgom.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163emlbgdgj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hifhvldl.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qkwdofxb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163kcbfornr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rcobxgrg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qnzlaldn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163efgunrvf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jeyhjpnz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163jejtqpbh.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163okcxrrmx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163czusyjjd.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hixcooyz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163xejnglrp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163szstdfyk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yqbrfqgq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ofonskcr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tdyojpeg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163eldovokl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163etbczvhx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163eqegfavc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163agkedqyg.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163gxjezmgp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163diszwzsp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163abgrndhx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163yuqhbkym.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zkmbeebi.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163hqjuvgou.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rdgtpngy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vndmafhz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wikcobdn.html

Py:   x in arr
来源：http://www.xuanzx.com/163ftlfifpn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163zzfkcgsw.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163lziwqnxg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163cuecbhdb.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ilylkckb.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pjkeblqu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fjffrsyb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163swnwxlvm.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mnqctzli.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163czztljrt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vpkgyfaa.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163pwptpnrt.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hgnayogw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163snrkvfwg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jceywzsg.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163grvleniu.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163krjdmdqe.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vrpdldru.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163effyfume.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ujzfyuyq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163iqssoxox.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tfobljia.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qozxigpx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xovzmtlv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xovldith.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163mjhhhvih.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fvuonmyx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163icxduikz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163tbbnfkya.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mqoodhmu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163eucltgiu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163eqpxrxlo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163bdkoxtfq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fogfowke.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163spxstqmt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zcurbjlp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163utzybecj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163bvmtdvye.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kbnbnldv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jfloghst.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jqhprvux.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163imtafyul.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163cyqxfmyd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163xybbhsgv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zkyzbpdz.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163fsdqwlwf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dajyciji.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qftavark.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163scsdoyyi.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vkhkesyf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jzfrutun.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163yknulvly.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tiitxrki.html

================================================================================
来源：http://www.aibaodan.cn/163wkiarokj.html

E. 字符串处理
来源：http://www.xuanzx.com/163mmogguxy.html

================================================================================
来源：http://www.xuanzx.com/163fnibnjwa.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163nyqpspci.html


<!-- 参考信息 -->