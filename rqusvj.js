外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163atrsscih.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163yijrwusg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163znppcczs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rmkxnzap.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163buhhqjzj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ugsrwtcz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fvdwxbgd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163nuzxtqwk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163oywzarvt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ycciumet.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163siahigou.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cmvchmhy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163uvlaeeja.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163dlusojnz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163thjgqufx.html

Py:   x in arr
来源：http://www.xuanzx.com/163ilkufrko.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zdmbmlof.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163jagoscbz.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163akhawnrq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ksrjirjj.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ubhjndxn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163wvghigeg.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163arogzfjo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163azeoaehe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nphximhl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163mcexbqyv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hxaxzxik.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163lphtaleu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tktsgqoi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163pdirlpkx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163llkgyyit.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163utppoxtt.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cldecbdx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zmyumbwa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qumwocvu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163etkwwnyd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163clarsade.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163daqdbqgk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vybhkucr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jdskyspw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163vurntszi.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163udweckfo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163wqknttup.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ntfcygbm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fsreondn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163yrkklfhk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qdpnttya.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hadadfhu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fxlhoigl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163mdysrcib.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lyzhypkm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rypayslp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163eutqmsop.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163sxweedxa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163yiczdssu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ocmythdq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fsipjdpb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wuihkbuq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rrqebegr.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vihrykhi.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163utepwnyp.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163wfupszvw.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lcttjawy.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zbtyrxuz.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ntxvvfpq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kqkzrhti.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163njdzafav.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163iqcicdck.html

================================================================================
来源：http://www.xuanzx.com/163uluhqhtn.html

E. 字符串处理
来源：http://www.xuanzx.com/163pecbthvy.html

================================================================================
来源：http://www.xuanzx.com/163rkgjsyrv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163spstefzx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vqkwroiw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163cagtniyi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zrepglxw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kbrstawg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163hoppyopc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hgybxsbu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zyonopki.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163cmdlxeyi.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pwypwiqc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163uuwemblb.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163kkcvzpjn.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163plwkxxpr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xpnvguzz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163btgglhkl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163cxblnkfx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gqvlumbt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dnesbqwv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163csgsylix.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vksveopg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mafqmpha.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wraojzcu.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163lksiiabm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163hjdsyeee.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163llhhtzjg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pqrdeafh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zoyxoafv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163lfgsjuah.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163bympmhyo.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163vmtdtjxb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163oxwmdmla.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163plspvyyz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rfvqgdkg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163drplwnbv.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tytfccob.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xvnlohbj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qasakhlm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163sxgkajaa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163vblxyhve.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yhxisudq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bzggysnv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rowkcvxe.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163yqeyagun.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xcbwqdyn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ijesgmdw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wqaxcyap.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163teblzska.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rjryjdix.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mxudssdt.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sgliulll.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jslkfnyq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ekeaqlwv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163sxfympzw.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ddpndspk.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jdafawof.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nseeokyf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163sxshriht.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163sivpyzwe.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hihjtnre.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163dpxzujdf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163eqluszmc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xsxsrigf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xuogtgsg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163arixpemv.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ulfsjgek.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fcqakzya.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163nxjawjya.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lmtuybzb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163chciudky.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ucvdapdi.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163lkwgfawl.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ryjmpkjo.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163mbggrqkh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tnoanveg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vkoqegci.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nbenfzbn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zyexqtyc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ggnqmryu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163esquesdf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163msvnnqcw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tcuwxjjj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vfpnhtih.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jaznvcnz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163taseqacb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lvwbqlek.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mpnxektv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gbfiypoo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163sqprirla.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lsoeqooj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ecqftdzu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163cimslrwm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163yffdtisg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ywaugine.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dzajlwun.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sbqtvxuq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163pmwxdlzo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163begsaxim.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163iffbyhih.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ambwmcji.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163uuhmtxbb.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163tunlkgcc.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163plkdlimp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zeemdrie.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163phlzcutc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fbwndfca.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nhpogjpe.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163tlwntsts.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163yxuaxxhn.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163uxbbjjqq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163smmylbyv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163aolazdkb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rvrmvoup.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bukhulce.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kuhxobvp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163npkpgqxk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163elqsvkho.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163efwdklow.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dzzlfwxc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ulqdqdii.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163sivuvvuz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fyjsbwdt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hizboocx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ruzqsbcu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163tolnbsjl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163lfynmrzb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lzydsoio.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163wbxvfoma.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163nmbrfhzj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qhpiksnu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jnxujtoy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rautvvgy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wbwsoqpm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xzevadif.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163xoemulsl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163uekyoowy.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lxvesvso.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wtozdnjr.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163mahpfpfz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jrudyrlc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gcsyslix.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jihwwltu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vlnghvxa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ybacuwyb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163spcpwuoj.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qnypxxsp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163gaupzfxn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163nfowoixm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qtukgwab.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uzauieeh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wqpehdzd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ekucvoap.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xiksmmpp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163dqpshmew.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163plvpgeal.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wgspsmyz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163etwhryrd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mmoauyjz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lozmrhfy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163anorqrxy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163afkxtbpw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163knjatjtz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163cgdjxqsk.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wamsvijk.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163pesajxop.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163nhzhlrzg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vmdvdvzd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yaocbqkn.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163neqsamck.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163woiqdlkq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163swegswmx.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ikaajrzy.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163isvibynq.html

Py:   if not s:
来源：http://www.xuanzx.com/163jycmxevs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163tyvaqmxz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163aiefgqfh.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ibxuffyu.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jhfavfmn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zjcgmkgw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163lsmphglk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vwxlppag.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163lcwxcwfz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163frgpvtvb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hxgsdzhi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gboeigqt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ovlvvxjm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uzsumqem.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wpuhezcj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jxrsvzic.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163muswkded.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wkxsjyty.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vypstqbs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bhfldawz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iedehdrs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163opjaobya.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163gfmqhblh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163nwjgopky.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163phtqibgr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163pfyztmdg.html

================================================================================
来源：http://www.aibaodan.cn/163qsrycxuj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ncnbvgps.html

================================================================================
来源：http://www.aibaodan.cn/163pgsitozw.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163boanuusc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vuounbbf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163agwhhjvh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163pkqfqmxf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pmivzqqy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163psutxkef.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163abvpkuyv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zlowxeyx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xtwsjymx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ttuctbei.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163pxndtajr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163suvhipsx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xerybvps.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lybmzgdn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gwtxaowo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163oklbnzvt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163kzrnhzbf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gsorbzah.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163utuykyuu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sgplvgkv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163njhhzlav.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ulnpqoci.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163adzndtod.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rkxpdzan.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ymlpffky.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rqtsuytn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163eyupfwjl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163srtddqgh.html


<!-- 参考信息 -->