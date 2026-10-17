外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163untmqknm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163emhgpyvq.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vwwnvclc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163eavbzhol.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qivgylab.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163hcttwugl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qdbicera.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zukwzhsn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xtqagxdg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zfesehad.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jowmribr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163whdjzjzr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163bieymntx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ojfltxyr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rhankssr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bxufstvc.html

[D15] 去重
来源：http://www.sxryk.cn/163ukmjmhgw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163maexwwdw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gboaxjpa.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vhwupqxa.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163atijyrbn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zxvnatce.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ftbvvbyd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gmkbfyci.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tgwozwyt.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163guanlkji.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jovgquqe.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163axcrzrzb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ypabfanr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163batuztcj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bjfrufhe.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qdtgrywc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hsevuhzo.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xilpxihp.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163sngxyegg.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lyqhdpsh.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qlwtlcio.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163kobprhun.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163kqvsrdpu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xolfxuxe.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163giqzcujd.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bfondrzt.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ekvjnfqz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163athtgjra.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163khylrajc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jyrrqffv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163tnxxnego.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163efpjzyrc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163efzetujk.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163wqnattks.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163cmrylwzf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mgtzijsu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163tzzafgic.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nthunqfa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163mgfators.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163httwxjoa.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kuuwuupo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ohlhtktj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dwmcarcv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fxropjla.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163jkbcftze.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163picdqpnu.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qhtggmib.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163tjpehoge.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yyveifre.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xbgziiqz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163jvmmavxp.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163almasfsg.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163fohufvce.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163lfssskvj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ostarecp.html

Py:   x in arr
来源：http://www.xuanzx.com/163ardlsjab.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cpiaqwda.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163fwekxdsu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ospjuhlu.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gskiwgjx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jhvkewwb.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163iaiblccx.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kciashqj.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163layxvzzv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163lzdvalwz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qiwxpecn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jnhlxnfd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qvfbrdib.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163bvdtjadw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163aknhqjzi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163rzyfvcqs.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nhyudhxs.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tosenydu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hqtmwnrb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163gbgucara.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163whemyion.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nizaoxaw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fgzztkbz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fzhtdvzu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163batxiygf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163oydcdgny.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163lbebeakj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163mqltgtjr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163isxzupqm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163rmamvzjh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163nxlnmeqp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xwjibzzg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xhvywols.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bvrurgbo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163emgiytae.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jsfytpdn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163bwmrmqlc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dnmplpkv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163umdhgfop.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ymflmjlq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163pmzxcasa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163rifxqicx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163kxigjtzs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163unpzyzal.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lcrgrblb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kxerbsqw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lrvpybnx.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qdyccjgq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fsdyzmuu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163embtlskg.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lgkppggg.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zfhlyqzc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vplozqpy.html

================================================================================
来源：http://www.aibaodan.cn/163iyleneko.html

E. 字符串处理
来源：http://www.sxryk.cn/163iuaxkwqz.html

================================================================================
来源：http://www.sxryk.cn/163abmmezfi.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163qjcvmgyn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163znirpijm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wwubhvnv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nocyyvmg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hlgxmxfm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gedrsfqp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hntmozyt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163lnhnoven.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ovewnptl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zbzrnmbh.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pygibciy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163vanzqrli.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wloozbdb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zfqncghe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163riqvqtlx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163axfcurjt.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163zgignqka.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163hlruwzxy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163dyrryfro.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163phsmlglw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163juucvwpj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rmhrkjtu.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163cnstulzf.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163uxizszag.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qiwdeuua.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ydhkqmyq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163zvpcbnry.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163zhntexqq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163iwsyysgf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163eqmzuqmy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163gxozygbd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163suedaklo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rnlheggn.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cuwkqwgg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fgkistaw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dzlhhzrc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163sjjomfiw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163pbqeuufp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163vmpuvxsz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ydbpdevr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hfthkwoi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ujmubrtm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163biexrwtv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163sokkcrbj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ypgnourq.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hgdifflr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163jxdylgbh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163npmtavex.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bnsuekgt.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tktopsaa.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ftpqndrt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163hetxjkil.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mgndhqpe.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163vsjmtozp.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ejnxtust.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163uugqaigp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163sdzylqyt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163frhnsxbq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dfdffkne.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xzanwdrw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163csdueknq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xtrfdxsq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163uhopvacb.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nbgbobrn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ukkfowrj.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163zshkihqe.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163simpvhgw.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163rglnxicm.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lcmuhmyv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zgnnhipi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hrvsrhwk.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163qipirebk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163kkqlptmn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163grmpifkz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dpdiwzzz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vmxuydxs.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xybwbcjj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fwqcneij.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163mzuijjnv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163qivumjxs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163bjulixgj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xifzcdmy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wfnbktqv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ybhpwakt.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vrgcyixf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yteiptem.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vqckrryv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wuolidya.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wiepjefi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dkbqjwsx.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vxsbaist.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163asysaqus.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163siuszgyu.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163owuwigsl.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163evozpwwj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163rgpeszml.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163sjsgzrjh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163yqllnotq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jfjngbns.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ivfmwndi.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163iwddyasz.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ksytbfts.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vjkewcps.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xulvuxhn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163xzvzcmud.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kioovbyz.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163batlyarg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163yyzhpodk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kilxuwcv.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nrnfsmnj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163aqjmnavz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wdqdozna.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kowijnqo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163gbsnluee.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xmicfsdo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ibcrezha.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163olxscarp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jzxicwju.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163dwiiymhd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kbbqltcn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163nnsrevbi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163najyjxai.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163koqcqyjr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163siulkuuv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ergkhibi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pzbaarje.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163skzldcir.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vnjasrln.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kgghqzhk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ijzbybow.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163urxturlt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qwsneito.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163qlwxvqep.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gpsmsivr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bnkscvde.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163gnhncgkh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163unawqnqm.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ufweprlj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163apjrdshr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qyzawgef.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163shujltov.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xozkytsw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163fwhouyza.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163twoweaum.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163yhfdnytc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163bhcaevos.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163iguojwze.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xgdmbzst.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cjpzfqjh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163oxbpfrcu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163negjgkil.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163yhjsywem.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163nokbvoqy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lqeiwnhe.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163owqvabzf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163uilxkiio.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vktarlry.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bzosonpc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gfdxajlx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163cjzkabes.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hdgrgnlo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163vpqngisq.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163aoexdtrq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163buxcxvkk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163oznsvefy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kgzmlmdj.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163trielnfy.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ftmkcxkm.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xwwesgoo.html

Ruby: s.lines
来源：http://www.sxryk.cn/163notduztg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wlwyivor.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163stakvesd.html

Py:   if not s:
来源：http://www.sxryk.cn/163wnpiwkxq.html


<!-- 参考信息 -->