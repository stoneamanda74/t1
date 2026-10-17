外链999!wailian999！

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163munjyhmy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163oqazokva.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ckgbbpjy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zbpdsctk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163txivsact.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nupiqjcg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163izhpgpvu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163svrihxcq.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ghpjoagd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163yfqacgze.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qatmhyrt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lwlyuabv.html

TS:   同 JS
来源：http://www.xuanzx.com/163dpthfico.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xwbdlsjs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tbcrmlss.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163kevpywxi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163egbrnhow.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163kugcyaow.html

Py:   from module import func
来源：http://www.xuanzx.com/163mmhnkurx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163oejqcfgn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163eynyrnqr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163kqmsvtce.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wrrbrzkc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163yoictsxm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163avokuiza.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cpxmpels.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163sbndlarn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ogtkqufx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163niutgzkp.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dmwmzqyq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163atlxqdwf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vbqiywcd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xgwrijoi.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xygnteov.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ryhujtko.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163otelvawq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zyytatuu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163puubietd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tfnvfbub.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163epxuedrl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163puackqkw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163tuqwrisj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tvzvgoyt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163hcghodah.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163tusgdlum.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vchqqwpu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ojexmcqy.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jsfluses.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gekbwinn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163lvgzzmfz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163yuvpyumw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163guvvrdgj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dwdpsqes.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yfcfpmym.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163mvyidpij.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vcmprzee.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163msndiaxz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163lbjhybqe.html

Java: // 无解构
来源：http://www.sxryk.cn/163lzffnwgc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dcyaqimz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163csfmcgko.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163xiiwcxnl.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163zlmbubzg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163tbvyvife.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163gbrjqrtw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163igpdzkuz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163dmpnilom.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163qxnhzmry.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163glowmgud.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163anyziyyg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163riwenpzk.html

================================================================================
来源：http://www.sxryk.cn/163loyqrazv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wpctztkk.html

================================================================================
来源：http://www.xuanzx.com/163rkaomqhd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163sgmetjuu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163blqiwfbs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163whonbckj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ofjithwe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ewhtwahf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163gzyjzmbe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163gniikmrg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163oykhuonj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163wyelbixl.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vlkeqwhi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xsmisukq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163gntpfszc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163avzeqecu.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163swlpgizb.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kndnrjfr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163twmtmmwq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vocifvkw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163yxjpuota.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163woodimbg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ihlqshhf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163hhzkaeng.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tcbqlsge.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rbwvzwwk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ndiatxgw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163gixyyten.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163pxakslac.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ocgnmgrn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jtmzbduz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xpvooxch.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zbyravyr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xizvlkld.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wpvekfdl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163yroseinn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rmoglbgo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163gpybxbzc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163emubezeb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yliqlvca.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bvekzzrw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163fejdpyjj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163nazzfqbe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oblrbesi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163eokkdrbj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163zryxvjai.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bmjybtha.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wjpusuwt.html

[D06] 数组长度
来源：http://www.sxryk.cn/163xzgjvwum.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mshhzucb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163nozsfpgf.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ogznrmwl.html

TS:   arr.length
来源：http://www.sxryk.cn/163nisoljgl.html

Java: list.size();
来源：http://www.sxryk.cn/163wrcloaxm.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qtacutuv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yqeekhwu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163nvjhabjg.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163msfmcrig.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ybkcfaes.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zlpdzvlq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vgfihxgw.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fggtdelh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qqvvnitd.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jmpjgbkj.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jncfiuqo.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ibktomey.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ymcinfoy.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ybaahnym.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nsbtbcgl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163aygnsjpb.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163kxutyhlj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zhgxitdq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163aynwrbrh.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163rcihqedx.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xpcwenql.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163umlwaqvp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jfieyldk.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ptlvtyfl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163kjsuilqn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ldwqafby.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163nxhrkfjt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163mqbvyemf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rklfbzmy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163sdxetabj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163heuvtdsp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163odgpbpkc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163nfwskvrl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xzubqmqb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163guqtzkcw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dpdwhxfp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163eoxsaeoa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163nxzzjqqs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xpfmmutj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163snkftncp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163eranaycp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fkoatcfw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163eijfvtsp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zfcaryxr.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vjdpleiw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163rohcjiaq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163juqatewo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163iovithoo.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wfiydnuf.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ehqwqhdc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163zyrmwrds.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pgcbuwuf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dqkppbgn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163tkdbmysh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163fnricnst.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163amjzulan.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ufhvkaho.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163aubzlepn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dubbjptd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163sxvfdufo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mpkkycdk.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fzbxcptj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nwdctfgk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163sdtmsfym.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mjvnatzo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163tvkarfix.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qgreqhvq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vrjmgzqb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163kquiqejy.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bdnujzxr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xycryekd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qyqmfaax.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bjdruddr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163afnpvxjs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163iveqndxs.html

[D15] 去重
来源：http://www.xuanzx.com/163sfmhmkcv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lwmpfpbz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163faypukce.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163apopbkfo.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zigyvjaf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ycskxbbw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lraepgwh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163okyjwdih.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163sjptlsay.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163rsvfxhpt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163hxhaidym.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kylectou.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fouzzylc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wwfbdzrx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163otedptvx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xwdcfbca.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163mxrmkjbf.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163lgtkdjgm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zuavoawc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163yoehyxrl.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nwkxvykf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wuezenqf.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163yvzrqvnm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163srizdsyc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163lgbgulsi.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163kicguixe.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163burbopsf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vqpddplp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wmxwttkl.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163fcruquhc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bipfwkiw.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163rdwyoboa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rmynujos.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163zotprirv.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163swbvgwxj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rrmxjwpb.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xqskqsiz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qeosgmzp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ykmpmrgv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163hiunqsvc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rpuookqb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163siuhrviz.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jfwfzdph.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163mnwqgnoz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vddnecfa.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163smjfrjwy.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mvrjhqqe.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xyyenkpz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dcjwaykw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mnogbpqf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163svicntuj.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gcasxskc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163awqhbael.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tpqhrexr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xkfalouz.html

Py:   x in arr
来源：http://www.sxryk.cn/163foszkcsk.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163jfhjgjoi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mcvvofkk.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163hbscqfry.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yrddcrbq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xfukpdxs.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163btkvibmc.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fsalerza.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163owrhuegn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163oueqylqd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163zhjxyudn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xbuzfnop.html

TS:   [...arr];
来源：http://www.xuanzx.com/163iwgjchfi.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163iqhmenye.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jmqyxwbz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xtxnrvlj.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163hmnrsjgu.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hyclxscq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bqiyzfps.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hwqiexdw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gcqvszrl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qhftcjmr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163dtrkjekh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vxxfihfz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163umxlkfgx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163gvlzrjph.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rbpxaxyt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rhtxayps.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163jbzcjqsq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163lwahnuuf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163hbrvxazz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163stuflbrh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163muohqrli.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163skumbmct.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163kqpnndsb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hysmlccb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163jzwfiace.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163aziqjytu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163thmwigvc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163oxlnmqzw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fkzozkmj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lfndshxx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163htigythd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163sxwunngf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vzuijcsx.html


<!-- 参考信息 -->