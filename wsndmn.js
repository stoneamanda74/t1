外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ugbfguog.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163jyjjanpe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163udfevspl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163aspnutnj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rqelgmzi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ekouedcs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163xhvftuhn.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163lzvjvwgu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163vqfiktmt.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rqmtxsqb.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163lrbviddy.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163jygfkrey.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163lkjmloic.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163cdxumagr.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163nahmwjfu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163oukxngks.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kddrrhmr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163pbvcrcns.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xiunayfr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163lkovejul.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ciyivwnp.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fiszlaht.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163boxqawmx.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163urlfaiwk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163phdyppdq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163xkmpfgem.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163kkfsabqm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jxkgcwdx.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163smymnugg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163znamiqaw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vczlrtgt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ujgxdbap.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hkplqjza.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163pngjfvcz.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xfldiyak.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163sglcpbjl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bwnknsxt.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163hphiqphh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hqcjplib.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163kpgfbxcd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163miywwmwx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kwkphekv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163kakbovej.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163pncamcjq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163xlofylnu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lfeevfvv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163mlofjctt.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vengaitw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fyemsmqu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163gvzjygwv.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163hbcqqjee.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163kpmdcsan.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163twprqmlf.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163lxpegckt.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zopeafaa.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163cjfjfscj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163moonzuhj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163iclcpvfi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163nudgzvfv.html

TS:   [...arr];
来源：http://www.xuanzx.com/163unopmlpi.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tjvbykqh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ztalrsph.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fbvcbawv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nsysmmvc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163yrnlztrm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ertbrsyd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163rehzrdij.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ympynufs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163liuvleuh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163wxnouljr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bcanlunl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163igmmsoey.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tdfanxfn.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dfkbelfx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hswhaczq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ibyrroyh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zflahsfo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rtjszprl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163xumxiqpc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fcixtlhw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gkphxbfz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ouewvfzn.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163yaanwvxy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qltxklaw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163yoruhcmf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163auoygbfe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163npcfqdiy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xpwylgyv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163whtijlnb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cbsprrjg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jbayqcjz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ebskgqub.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zokgcwod.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163gutfnffg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zreakvmz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ockccpio.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dpzuqvon.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qzrjqfjw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163iqwrxmhh.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163cikiyiqz.html

================================================================================
来源：http://www.aibaodan.cn/163xxtwcilc.html

E. 字符串处理
来源：http://www.xuanzx.com/163tgvhwsjr.html

================================================================================
来源：http://www.sxryk.cn/163rxldunya.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ddjkdsog.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vlrhclen.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163svaoitlj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xgexssyv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rmwkhyth.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bpjeswlj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163oxplcjsl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163gaghhuvh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163dnfvhjqz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163zmbxpmxx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163cjdfhode.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163moggfbfh.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hkdtzlbr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163trqdrqcz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ewciswtk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163axsrxvjd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bczbmgll.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163hfpfsynx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163gkegzuws.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wflwqfit.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163mtzzcayh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gzjbaocl.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163audyzlko.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163sxkdgmzp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nwnuxkvd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ebzpnydi.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ethsqjyl.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163xqtkfdon.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tqugcoih.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kzqopnwj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163wlqasiej.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163vhgalhee.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163cfzflzlr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ezrzqrmk.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163gafveusn.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zozjfgul.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zafxjpio.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bfnxmqca.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ygwwtoss.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lgzwsadu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mnvtyxjs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xerccqto.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hmyveill.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cvvjdhfu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163etgxkboi.html

[E06] 替换子串
来源：http://www.xuanzx.com/163pobphwuo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qwymlego.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163abmeyrqu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uhlnosig.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yexqcwfp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iioeieyn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163lbwfoxlp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hgkfosdv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163nhjwdwrj.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ldvkkvlk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163mlhfeypp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vjgiuden.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rbofrdgf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cpinjdrz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163cnkmmoun.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163lexxbsrb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163fvrtmjgd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ixowyqjt.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163yzmqfcfy.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rcfyjaeb.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ndjutbei.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163iqslnkwv.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163zzszclpb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163suczqqct.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163olwtjhly.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bizgldsd.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163qacmmkxh.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163wvgvatge.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wlucvbac.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163edjclymv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ozvzjvqx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qvbvvdwq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163qnmvyxto.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jowwymbr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xfrbtovw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wegiadiy.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163agwkvusw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163oigrnhte.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163yylhhxuh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cljpanbv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hfwqpgpl.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163fsnasnln.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163oubxbyeh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163sazcpbju.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mfuujhkr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dqqbznfd.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jeshbtjm.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163pmxzsezb.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gknyjgvh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fdvubfqq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163uieybzeu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ipqznmxe.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163cxswaelu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gfdksuhp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xrqipciv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163operffpl.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ltcdvnav.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jbigsdok.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163omagqhek.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ysnzlihe.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163sclgrvkn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163epyvbyiu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jlroivrc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163immzghhd.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hdpcpuus.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cefbuexx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ieumnpmo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163junwoszx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163vpwksqak.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163byldhrtw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163tseylasm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163wyytficw.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kyxlsgvi.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163iptiyrnf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163wuwlmryt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qlkrdibm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ehrattns.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163cornrxhn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163siucndvu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hbocxpfn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qnaclpih.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163uxrbdtqb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ghdybsei.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xyzzhode.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163djvhgapl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xleeabig.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bblgpcre.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163dmybfixf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163rqpgtfpa.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163dqulwwko.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ehtpasog.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gbmermpp.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zmydscba.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vjndejps.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163uwaqutml.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163rhknjesc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163pteivhyp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163auwvitqb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pswvwjjb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163iiwfnnsp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163aafspiud.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163rvuuqrxe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tfboaouj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xlztzedh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163nppcenvl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ciythklw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dtfqoqts.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qhvtkkgr.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163efkuoaqf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hexsxpib.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zgcvengt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sohbwvqk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163efgmjfmq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lfqhskdq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163egughlxh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fbtelqjz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163brswxlny.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vstuquuf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rlfrlqrt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163svgbrquo.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vwrukyor.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163aaoykhia.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163amiglups.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163swocvehr.html

Ruby: s.lines
来源：http://www.sxryk.cn/163hatswuwl.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163jqxgkmid.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163sumlzbzl.html

Py:   if not s:
来源：http://www.sxryk.cn/163kirhwklr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jzrihucs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163otvmtaam.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163cknrwbwx.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mhyatpsb.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vvkcynkf.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163yosuhrhn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163izareozz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mjftzqjv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163tldjygxe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163qncgncmz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xxryzngr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cttmpzmi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ctlmtcdj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hkvbmpad.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163aapmybts.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163rrevrjdm.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ngussfyk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163sayinzvt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yjufzucj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jizppvci.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xkuzrhtk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163evwgydpp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ycwoyddk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163vjwedypd.html


<!-- 参考信息 -->