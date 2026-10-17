外链999!wailian999！

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hovtoqrq.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nidvjiuy.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ryehmrco.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tvmkfdwv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bxzvkmpc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163gbkcsqhg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ozdcxanq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163kyyujklx.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163cluzlltr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xmthcycr.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xcdperxg.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163pghsgogw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163tkzpupvs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ggyxzltn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163sbjippev.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vmwywfyv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lkucfrjn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163uioqkoqs.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rjhrqmld.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163apjrocvx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qrhgrzwj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dnducink.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163tbdxsnqy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cneqffkp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gorzvngm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163svoanecn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163knckvmgm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gpxhxaab.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ailulpvt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ybhujeff.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gyukfjsk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163mfbpsmsa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163shbnqkhn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163igwkajcr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hpzgprap.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163aledaegz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xkvxyenv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163rcgkxnbe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163gmcugzwp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wxhhtfpo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ijemghfm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163fcmnnhrw.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zglvoery.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163rewuugpk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163atrvejhk.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ppcoykrd.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ptmnqfyr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fobshbyj.html

================================================================================
来源：http://www.aibaodan.cn/163fiavbdni.html

E. 字符串处理
来源：http://www.xuanzx.com/163bhcgsdoy.html

================================================================================
来源：http://www.sxryk.cn/163ivtbhqph.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gjxqvcwj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pqppgvrh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jscwpaqj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tjjjwdxl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hacwvyad.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163emqmzsqb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163iegneoot.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zchpjzlz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wcgsqnbo.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163peidlnuy.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163urqlbizt.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bnjfxcnv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163denroniy.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163glivlwmy.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qnpmvgko.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fenyqcdb.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gtdwsldx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163gwpgauxe.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ohmjbifd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lzqvpjui.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pdqfwyay.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163eswvnbpt.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163dqvgnlqz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ftbvnmxg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dskjytdp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163noghvwwh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163boznejdi.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163davkslcf.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163xzkkssdh.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163yqybfoft.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163cebrbdjy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163rsejognd.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163sffyusmm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wugmtdre.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ugloypxc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163efypxuyf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wfnawbxg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vgaivcge.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163utjdxlmt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lhwpzhqf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163aubymziu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ksdmkyga.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163vqajlnbz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163azwmowuw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163bxttpqoz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hfhqpmle.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163gtrpuaez.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163bivjuscr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jhrxkuik.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qwchfrku.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dpjwwdhv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163gvdxsqdk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163cidylhgh.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qimpoaqh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tvwawths.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163wvsqewmy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ecgmviyd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bkjzotlm.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mloifzsj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163lmexahip.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ulrisdik.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lhkvlvfx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163qievwcry.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163scoevozk.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163jiijhdvs.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fizzxvlc.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163vtmuksus.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163edxbimfw.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vttaxopg.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rypojckm.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lxjgtgqn.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jjueizdh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vwlhleoj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wenquevh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163atkwlmlg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bbugnvol.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ydgryvbl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163thgigiys.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163tjlhxits.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163atnibrng.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qosoeupf.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ogtbrnqq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qneyleuf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mqvprydw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nvlgurdu.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kdhuyhyq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gmvwmdir.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163uxmsmyrj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cefkbehu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163lmcazwhs.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163elipqarm.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163xpylyopf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163wudradjh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bthyihft.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163liysyzvs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163awpgrymc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163zmozaqvb.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163exkwoisj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uzpclriy.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163pqqvvsho.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163mggayjww.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ihsvesel.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ivyqdvep.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hdnoggtd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163qtdzhgya.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ttaqimml.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163otycwkks.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ksbmxkaa.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ivawyuqr.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wxcprfgu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163zqukgxlc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gkijbmtz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tgbptvvn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mkweodfo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163aliyilns.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wskjsock.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163acbectot.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163usnkmsxo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163uqikbwhf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qgidpbmy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rowngfqv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bsavbgft.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gfvcyooo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bkgxdekw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hczptjzx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fritwufp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vrorazsy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163muxxbikv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xhdwxxfa.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xiondlwr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ntewmyec.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163rmntzblf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163yamdmulj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rxijhwku.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163slfjtzsr.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lnfwbqgo.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qisulegz.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mkxvwkwk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163egwkhznn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163eendxaap.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mdsesqqp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dtuasxfw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lyjyboyj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bbokwxwz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rrjbhztg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163blypqfzr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yopujebe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zkdktwqf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xophljif.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zlvutjoa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163szkbfiwa.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163phwbswsl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ifdbpslc.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jbcepdad.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163zhoehvge.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wrewmfea.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nhvcdvpj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163urxifdpd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ezvyavlf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163gxbbpggn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163cughjekm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dhmmqtyz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163dzdvldkg.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mblvrokf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hsarlkck.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uvxxqnrx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lzlenoln.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163nhdmyctm.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163szynhhmv.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ygpmcnlb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wualivwz.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163owyvwfwp.html

Py:   if not s:
来源：http://www.sxryk.cn/163bkyokckj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163gseduwij.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qczmusdi.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163rihpertz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163oozqkyrh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xxxhjffq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163remyawyd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tqphwpkz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163evnpsbyp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ajdmhlyg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mibjyaek.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ksctclsw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163whtxzbwf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wtceuorf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hcfeuqmk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xazmamyf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163mvkmogrw.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163npdlzvov.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163tdcdxged.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ktiimuys.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vukusikj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163odtcyhty.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kzeblesh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xerpyssr.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ieyesdtq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163jmyhuqwn.html

================================================================================
来源：http://www.xuanzx.com/163utsgekrm.html

F. 文件与目录
来源：http://www.xuanzx.com/163jcmfkkjy.html

================================================================================
来源：http://www.aibaodan.cn/163lvmebflg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mpjbfdrq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yhughqmn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pzjqdlzd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163irsrjzqt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163iarhxahz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zwkmwikr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bfwnfhjv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163joyqjtaf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jgaoxotl.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163najbhogi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cvxrmedi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163pfzdglzn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cddodrtd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163tlpowngd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vbqskiay.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163uojwyzbk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163jmptevgw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ckdbaneg.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163tqgkwyfp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mieevhex.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163yespqsgc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wpgeaojg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uvptxhoc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163scrtokno.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qunpyrrr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163twyxbfgm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163wmtxgmjr.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bnocepag.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zqeqngkg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lmnfjrka.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nmnhsttk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kwmyeuya.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163itehwfrw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lzzyviia.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163nlskmqwn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163yjbyhsvf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xskiwjjj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bvggowbc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qkufmvjl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rmapcnsp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163urupcbbj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zuxgfhrj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mxilenqe.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163daueukld.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163lvgpbfhu.html

[F06] 删除文件
来源：http://www.xuanzx.com/163zhjhvhmv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qfuinbew.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163gfeadaiv.html


<!-- 参考信息 -->