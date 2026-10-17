外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163yddrnqfn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163wgypqzjt.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nbydtjko.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bkqtrkbz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163drgxmgiq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vjzsxuqe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163djhpolwa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qlsoscyr.html

[D15] 去重
来源：http://www.xuanzx.com/163xnnpqegq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163skrtihcj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163clativhn.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mebqkqxu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163havzgalr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163uuosvopp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yvqyoice.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163oemsdtic.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163djbkdybs.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163lyttoeot.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163uyiwtisq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163txinjmym.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163axrqplvw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gjzkatdh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fgfbkesn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vgiminkw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ojesrxwq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wzkxyjxw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vbxwuaqf.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163snvpskky.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163olqywvel.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163dmvuzwrz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163etdmtaqk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mdlpxnjh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ktrgtdbc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163xdkwcogi.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ebeiwydu.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163pkyzgccy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qhkjlhay.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wkwyvpzb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uqzynhbb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163cipjgzdb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163crjdtpmi.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163jswstcmx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pyudftop.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163mxpifonn.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163htsomxcn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163iyvivaek.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163bnbxkuwp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163vjszemik.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rojvfcji.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rrpmbhvt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163fduhlrol.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163stntzsui.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163muwjdhsj.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163lsensadv.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163giovzdjc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ulolzmwy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bvvzxtqi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xctwiwqo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tryfmoyq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163huvtqpgl.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163epjczout.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163igggnqph.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kpnzofco.html

Py:   x in arr
来源：http://www.aibaodan.cn/163onobudzj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163uqvqxeif.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163vmlyzdze.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qkcscmis.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163dzrkwcza.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jxmyjpgi.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163eujmjdgs.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163vjzadesv.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163znimzjug.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163exusgbeq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163gxsohepr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ntnxmxgk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163leidvejq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163idhoolfn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163acgymiqp.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163yffndahv.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xbtmcwhh.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wiipjcwc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163aaazrnhi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163mprjcxef.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zbptifnk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lafpivrh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jsytmvjk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ppaqdmbz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163yeymopih.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163mwymjrck.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kcfmdpte.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163icldzxfo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163nzagthxf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ngjoexjk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163agumicmr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163glwkopca.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vqokhbyz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xaalhesy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163hwprbkmf.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mfnfxlyx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gacxmapt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vverxdfz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163rxkcvetm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hrmeaqsp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zqiaxjvl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163qahipzgn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163fvytskls.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hnmomiim.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163racjdcgq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163quuznlyf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163nhwivlkf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163nwnmunwv.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zmvhkxly.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nvptnmwc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kiyplrlc.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mmylnnjw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163uzjxhklb.html

================================================================================
来源：http://www.xuanzx.com/163gdliwmlj.html

E. 字符串处理
来源：http://www.xuanzx.com/163rkstdvdz.html

================================================================================
来源：http://www.xuanzx.com/163xxyddzel.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163inuaglnf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zrayntle.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zphaqqte.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163slmtimms.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dajtjqcx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163bhkzdial.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qjdyztkw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163gskgpmpw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mbbkyccn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163syewrbrr.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vcggofvr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163posywjvg.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bfaqcsir.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vshrchaz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ulthnjqh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163slyruzlh.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163xvhlpjih.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tiergyah.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ptbzwiyg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lyewuezq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rnvcyutb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163teizolkv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xvfzaryv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163atjiouwb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mcesvquj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xqsinlcr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163iuygimek.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vjoulibj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163flqhezqg.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163fcntmhhs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163azjqwyba.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163oerzakui.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vcewyaoh.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lqvbckeb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sxlajrbf.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rpjtkrzi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fxvdcwvl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163iqakekbj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fwipcoed.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zohgnvrp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ygoknhoo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163szwxcbxf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163drdwqqxg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ufkmscfg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ykurkttj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163fksofoon.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163yueshpmn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163fsdtjqho.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ydpunkzs.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kpbqqkjz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rndjjmss.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cimbxyvb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cwzvrlhi.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ukshigbw.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163eihujbyw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163inlktawm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rpauksei.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163qzjozyxn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ecbrsfxm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163pmwsgzmd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fzppsgdw.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mvtykyld.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ejafysux.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qlxkiqgf.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163nawfrzez.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kakybpkf.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qvmezqri.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163izlhkprm.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163twyhflwo.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163hmneojnn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163usjwqlev.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163dxxtxehn.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163iowwnsme.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163mtorvpuu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163edchsvda.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163odkkhntb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oxdamcyy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rzayegpy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163rwiirqgc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fksrklqk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163mwtcdsdo.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163vowcauxj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163bozpseqe.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rzzswvbp.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gilsdtol.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hkheaicf.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qjwufhoi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gustpiec.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ifytzpkx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163lnevuqni.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163nlqhwjmh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163iuywecja.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rpcnhfmf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lvpmfuxm.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dpsqbqaa.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wtafgskc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ecvzjylf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163xaantgrw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kuxmhtue.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163xmzeclrs.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163qclmwdui.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ydcvulil.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zzcswkkf.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qkpcmdeu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163rcjoebdd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163nhdknicq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tktevvhu.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163pchwfbus.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163zyjjmbrl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jwsjfnqx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163jxuhrsaw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fwmzpekr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ernmocvh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pcwjncea.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163thwtixdc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zubouchd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163apxolcgf.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163sfjghhyn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163utefftht.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163zvbiiozl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kieqqjjq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163aoqdvgcp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pkdqcdyy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zwwetkrv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vudvrdgo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163bimqmdwq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163pohvujyj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163flqveesw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ezpqdvso.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163miflldxu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vgpyqjvr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163cqzuolwk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163eteemgmn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163atgepzxe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ihlbjucq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zqixszni.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163kusinblv.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163juahqklv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zuisofzi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fdlbxhna.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tsfatzbi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bafawuem.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163uumgkeql.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163dzjncnod.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xtaumhxc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xwsivnoa.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163hkobwlcv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163poktzpsl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ubwhvnpt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gowjegjm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nwneqqaj.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163utklsrpo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jhxoqamt.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zllshzsy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cgytewib.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jxmjsorq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dgmswthd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hxzilxtd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163wrvdxgdl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wbhnwqoi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mtzskctk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163sspojawd.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qqmygpax.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ucntxvve.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163iwrgzfvf.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xmmnxmmd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ohbeoazb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163givjatek.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163fnjrkoyu.html

Ruby: s.lines
来源：http://www.xuanzx.com/163abamgdei.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xavvilbj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rnpzjtsr.html

Py:   if not s:
来源：http://www.sxryk.cn/163pctnqjaz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163chvicpbp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pzpfkwmn.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ojhyytwq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163rimmorfr.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163kttcrirb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163eicfzalo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dxrxknzd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163znaqyrzb.html


<!-- 参考信息 -->