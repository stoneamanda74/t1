外链999!wailian999！

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163tirxoatw.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163abjrfcdl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163apwjrgvp.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163uihsopcd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163scmatowd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pwbsnqpf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hbbivoqf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163nxetttow.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163imwtlnqi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163lqmnvone.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163hwvxlsel.html

Py:   x in arr
来源：http://www.xuanzx.com/163qddcaaes.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163pwacihfh.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wllpuadq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rbrrmtgx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163mlgqasrq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hrdfkovj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163oaoqyswu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163doyocgsd.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qvswngfi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163mnzajgjh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163engcooth.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163pyosyrnu.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ecwlmhxu.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zysstjca.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rluvklmv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hiwsluhe.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163bpfejadr.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vvfzmqog.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163cuijcpep.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163wrvfahss.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163krzhzexo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jdyfeopn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xizuhmor.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kmgfrbtx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vfvvfwyr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163yrowhben.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163mpxsqhca.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yywschgl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163pwiefcak.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lvvdgfqz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163kqqilxlw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qjjixjcb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vvoxwvdc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163mwoechks.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jhvjwlrc.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163aofyrycm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bjixvazx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ijnwixil.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bnzfzvji.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163oenbqgti.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163dhlyxmck.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zsclclme.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hpicwuad.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dxyjebne.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vvrgqbwv.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vkuybzrr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163dygbaeaf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163yknzxrlv.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hstnjqmj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ijwfcwjv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163oovmmaek.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163irgkdmpr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163hkwjtsxt.html

================================================================================
来源：http://www.aibaodan.cn/163vkgfdqua.html

E. 字符串处理
来源：http://www.xuanzx.com/163itxphvbw.html

================================================================================
来源：http://www.sxryk.cn/163nldrrmci.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163anbnqlhy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163smaembfg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163satsvjok.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iqmpnddo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cxljeuoq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163srcyfzpq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jpovhrcm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dptxgxru.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163skkbrfqm.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163kkknhshj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163exgchpju.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163domkfydu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bqilrupx.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fmnlpdfh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163klyhwnzr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163koquyfkj.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rbmulgkk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163olfdjpzx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163empcjfgs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163haopnsgg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vvhqxsbg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bgkrmfsc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163wgtwjlfr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vgptynfv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wesqjnot.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gwbggrpb.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xfyrbvlj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163bnfbkueg.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163vzskrqdz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ythampnz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lphyigoh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163pmxngtrl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kfswuqfr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dhbpvxan.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163vepntkja.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dpbcniix.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fntozrhk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163qxmdfbdt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163foeuybhl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163anxvtfrr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163inmozqnx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ifpkpkxj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163hcycqpcm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163lxowwizp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163dbcuziyo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163opaepvxi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163rsjsgyhh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163avwompsa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cyfnxrvs.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163typyvnxe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ktanadab.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dsmwoyxh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163orkceqpi.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163etbgqsrv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hfqlyqdg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nfgesdag.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163zuwbxvsu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163oxanqcbo.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cppdryzo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163klxiuhsq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163pjlxgqxi.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wsjbbqrr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163swqkpdsj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163afcuacrr.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163pylhhpzd.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163boiqzhmp.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163uobxtvxp.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163mahgajxp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pcjwgahm.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vhyzbevc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jeungrht.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163sfkhsopi.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fmturkfu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fjbykfdj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163hosoxobo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mgtbaxjl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hsmexryo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ylagqyzy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163xgeowxku.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163exnpswlx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163npwchleo.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163trbcuopj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163cltsiikf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ukzvhvru.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163awewjncf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qlwrswqb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163bcvkiquf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mhafvrjo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163nitndbma.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163sqiwdzaf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ujglwjup.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163kmptyndv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hfiagyaf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163abacxwao.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163naxvrjtb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163oljowjvw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ikcsnvmm.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163voyzspdf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nqvocrlq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163btvtoupu.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163znoaimrv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jltmipfs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zuorpbcg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rotwxbbw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163yiulhajb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gljxkmli.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hhuiyrgz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163druhnsni.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zxivmsip.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163uoxdvmtn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163daquvemq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zfawlgou.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xsxgutiq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bsjfovss.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163rdlrnmtl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163bvywemwh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163slqecfhf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163klpdexdr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163vnjbobue.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163svimpesc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163pixsbqbm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163osftatav.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fznajwgj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163kapopfbb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163igujqpfg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163rmcjnnmq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163esksofmu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163afoddnnw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163bgnqdtix.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rznyaltn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163otcdnyjy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163evlomqeo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163mtfweijh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163fskdhkyw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163nuuzmtyn.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tovqexct.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jzxfyjyd.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ayrwkzvy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rwqpyvqe.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yopbmjxh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163kcdvgobo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163stjoqmzt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jmjmuftf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gfzjtkuw.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qhddiizg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163kxlhfxyl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bqijtabh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hgpyjiak.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qakhrjzn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163njnskskv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163utcojyob.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nujdwheq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163kuzfnrit.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163jvdhiifz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rjxkmuri.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163esajyuwb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ttblyozw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uvmaqzhj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163pstnkmda.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ngemmzvo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zanjlfnr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ncqqfjwr.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163cwfnukuk.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lwtmvrbc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rphcdqhz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ingmuofn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bjcuzwzt.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vqrowvus.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ernulaqg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xsctqhcz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kfilkkuk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163vfgrfsgz.html

Py:   if not s:
来源：http://www.xuanzx.com/163hlzwrxmq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163rsbwtvnr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vjnsepyp.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ptvdsags.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ujgshuta.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163oqbnangm.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ygemuonm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rytzyork.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163yzcsetnm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rkjkxsdp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163egjpwiyy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nocarvub.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xwptdddu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tpewgrkh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vxhkiund.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hpesvtyk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wqlazayv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wkqntdfh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ptkuebcn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gjiyhuxe.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ycomyscl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zvqsrytl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163xunyoemr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ivgifbvz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163oyjwrnqv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163xlkmzgyz.html

================================================================================
来源：http://www.sxryk.cn/163rdonfdgm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163gmaiotmu.html

================================================================================
来源：http://www.aibaodan.cn/163ozxjinpb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xbsrzrks.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zxkljkat.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tfetvcst.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163aptrdowb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163pwsygocd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xmrrsegu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163uuwtpdwm.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163shmgkiqc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lwwmrmoi.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cubwlugr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163biatrvfn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rewinkve.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wkgcrssp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mwhoilhu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jqfkvets.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zxdifyes.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163cpzjhtag.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qdwfnwau.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wgqycvcn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163geeonxkw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ghaowsrc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lgbrijhh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163iouihvgv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rnaminag.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163luaiszjc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qwbuiaom.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kqnbzkdl.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163sjzplnux.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xbzwefjt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ejgmtshq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rxazpsws.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ftwlmxwd.html


<!-- 参考信息 -->