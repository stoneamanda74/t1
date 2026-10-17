外链999!wailian999！

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ezbmqmlb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gheuwbdj.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zqmxsfwd.html

Py:   x in arr
来源：http://www.sxryk.cn/163gyzslamr.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163blgmobys.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jsajldvp.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xslshhuz.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163munqlzvz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ywhksern.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jurgvree.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163trpxfefh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163uasrzkow.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ummbewhe.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wonddeod.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mexabixm.html

TS:   [...arr];
来源：http://www.sxryk.cn/163jjbhobvs.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tiboloji.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163swhiaceb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ihduovks.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fxxqrobd.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163mtbvjtke.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fhqstykg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163uegtnwyf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bbfhjmpl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lxbcagtq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ohrcwydy.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vfirgkqv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163youqjpcq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163afurhcap.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163xecknhhy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dipokfoq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163suspsulq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vsneavwx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163owrnrqua.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mhfxzyhx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fmqragks.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163mgekdbos.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163qswkfsif.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163rlxvhjdz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163mtzfknpd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163yxfphzbh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dyjlrljn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163yxhrfjcr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fkhozyrd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163njraokbk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163whywlhku.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163djrgsqji.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wgstqrlp.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163rfpcnlsy.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qyeluywk.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163qkucdkpt.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lqqcoqvw.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163foxdwjuh.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ehyddgoq.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gzzuehlk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163cwxwnkkl.html

================================================================================
来源：http://www.aibaodan.cn/163znkgtmpq.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xxstnhjh.html

================================================================================
来源：http://www.xuanzx.com/163icvwybqo.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mfoqbmhz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163olpipwev.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163irswslec.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163clgygryi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163eghgkdgu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ktlldldh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ybwvhvws.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zctqzews.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163rrfaqmyo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dzepgced.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hniqvpaz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qpkbsibq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bwcbxaiw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hjquhlbb.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163upbzvyhu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163nflrxica.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bzpjdfbr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hpkqebpf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hiirgptl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pmqmwnjg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163alrdbzbg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163flwwdvld.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ixxesalx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rtvsousj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vpmkgolk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163zsbnpfro.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163yqxfbgfn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ktsdfsxz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mcxyrsgs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163odfqjjal.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bzeppyfm.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163aydbqlpo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163zbwbdsvs.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163uqushbha.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163odnsppcs.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dfzbwwzj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163cqvskafb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163hiqsvsaq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163qtktqyfx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ewlcwahh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163faflenfb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yrcqnstj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hyyrnnpt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163tdvwhsmt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163qpyjppgr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163fqokdopn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ajhbnjui.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163uxahpsct.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wgyghsst.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cwagrsao.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tfbtsvgl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163khhttxzu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hiqibluv.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163sulaptde.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ytjbakgn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fzmdjbff.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163qexlxwvs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ggohmpey.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163olzikmly.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163beqitmzd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163umylqxxg.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rwasqbjv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163aqzdudrw.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qohyhzex.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zbjdftuw.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163rhoygolt.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xatybuvs.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lkzsmlrn.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zbiyppna.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163juzxvkxg.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gmflbxdb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163bpyfmetp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rrulrsls.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rezbpvpz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163syszwkua.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vrjionsb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pxalftce.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163oaialnyt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163eraqmaai.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jdblvome.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163udcomigw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rupaldpi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163bhdxthxl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rkbmfhot.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ielbvfxe.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163thrdcasn.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163mxoqqmbp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jgtsudlk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163njxqxbza.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163lenmthwc.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163aznnumyp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163prmqvpyr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163sjafcjgj.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vlonofkm.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gntpivmd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163zcnqcrhg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163dnctjpfx.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bzmtjcaf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163glkqdzde.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163zfcoaaeu.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163tdvklimg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wpnsobtb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vdplcqmh.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hqwticep.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163eckuzvaq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163usxdycev.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163rcoyzjkn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rqrefsqp.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qupmntsg.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ddrfeqma.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gjljyvse.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nehmawff.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fztllcgh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bpmrxjjh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163faghmczm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163pslrxjah.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dtkaqwnp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vnclrzpa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jazlkzmf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163pufqvuqz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163wwxiaxht.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mkwahyvm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163sclrudhh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rrcguwkt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163frkrujqa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cvekznng.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ebpspqdx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163exmqjupy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mfalfwjt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163nzcifccw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dsirvvib.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163bhuugjhe.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bswzpzct.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163fyfrgzig.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163jjsgvure.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xogvumqf.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163imoyjveh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163nalojfzf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mfpryiry.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ajxyxsbj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ousmoegh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163mebuursm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cohenoeb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gccwylhi.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dtffnmyj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163nwixzedl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163hklndvjx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tomtdoim.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wyewcvaz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163cjabgiei.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163kfkolqby.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qpkbgxlu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163quntlqgy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ctoekcgs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cpdytipl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tvfdschv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163utzwafnf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ttowaedp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163yzpcvqee.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163psgmmlsg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ipgnjhma.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163naholxlt.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163oprfrdky.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163drgadvvw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163meebawqy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qqdbxlvr.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163csnbegys.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163tgsznfmg.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xigrxect.html

Ruby: s.lines
来源：http://www.sxryk.cn/163erarmmal.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lyxtyjpz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vzirbmxx.html

Py:   if not s:
来源：http://www.xuanzx.com/163nvuwcekn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ywbsafpp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mytlyyse.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ryoxtbna.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163jfoasjyg.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163gtamixhg.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dbnzynjn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ntkldvsl.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cqyklzvj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163djukguov.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163temgylhv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aoabsdto.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lpaidfgr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163aqygbypz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163sicipolh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rcgzaphv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163htovfkkf.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bbngnkyu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163cxplmuoy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163sgzriuaw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163payiyrlr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zrnywzwi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163gphlexem.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bxnafsqk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163pqmmqmqb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163xfyscuoi.html

================================================================================
来源：http://www.sxryk.cn/163lfxwbgld.html

F. 文件与目录
来源：http://www.sxryk.cn/163tqxomokh.html

================================================================================
来源：http://www.xuanzx.com/163lgeoafxb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wzlwbfag.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163cijchmmw.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pnlltgau.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163csymbtuz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ytelhddp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ksgonxxt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dyojoldn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mktvkifg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163klcerftn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163iiugifkk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zgdtgqnp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kipqwupu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pmfhjfzz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vcvdcfns.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uqhrpnzv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kilutsxi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163eguoiseb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ossnwydw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163sdyqvfrh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163udgltoli.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163sykbocrm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163beqvbmnp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xirvquwa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163bwjppwsk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163anwsbooc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163aeujbxrj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rssnelyd.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163yefmjnme.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ulpxojrx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163txrhcine.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163afmhjlct.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rxswales.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bkdvvpwl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ifbjkmiz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pxdtiiyx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163yccpigaz.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cugatjdf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xabdinsf.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163tbduuldl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mxyzzskd.html


<!-- 参考信息 -->