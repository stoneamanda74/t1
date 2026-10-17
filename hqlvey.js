外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163czkkghuu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gisytvih.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163muktszbg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163lngrcfdx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qjkbcson.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163seyxmrns.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vuuxsfxj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163oiyjlctk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163koarrhdl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jxztwakp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zluqmckp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hpjyvune.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wsshazod.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hcqqdtsr.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163epkredfg.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tvwwvddc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hdoiiaia.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163hcwgwpym.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gkhnndgi.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163gihlhkkm.html

================================================================================
来源：http://www.sxryk.cn/163iiwwoius.html

E. 字符串处理
来源：http://www.aibaodan.cn/163tkocrpde.html

================================================================================
来源：http://www.xuanzx.com/163avznjubg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163vllnjypn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163caprhyce.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wgfptihg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vyvpuehc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163faqpxysb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163klgfwnrr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ugcanlqz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163mmkvnmih.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163nvvcesea.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163utmxjxvz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yurgnehr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ukybnxto.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163entlfezp.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163orelglqh.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wbyrvksu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qpzqipdq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163oruljpak.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mhampkar.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lpggycnu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yapgnhew.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163btkwayme.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163cyfpgcpv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163dzipfpkt.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fwfaemoi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163irlbxmih.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ofnsmwak.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yrnageux.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163skvwibji.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wkhgqykj.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163sdrprddo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tmcbcodp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163mfgboeqs.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163prwxdxnr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qxkrwzso.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nhyxveis.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163acieqccj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rdebwrjz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163zueocgnr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163mqatlttf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tqkupgmk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163asrmrpsx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rooyjxka.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163kcbebtge.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163kmloxnrf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bvlnvspl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mahkhsfm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zleryctp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vfsmtzdl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zzsywoie.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lkuwhimk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163crymmwja.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163rscoascc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vqlruhvh.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163wloiowem.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vmauiare.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mgaiccyk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163oqdyjesp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163lthqgwzt.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ilrbzxca.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163cblapuiy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tahaukkv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rnlxgwnh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vbqqbbrm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nzhidmzj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fkdhtofo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163oltfgyxf.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163xhaetwej.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163neszyxzy.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ahfmatnh.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wuhlmzmb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bnhrvepw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163zagftxvn.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163njhuuslj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163swpgjiid.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163evtnzfyc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163aakxiwzx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163eeubzwbr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163axnjhvru.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ngfwshkc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ovabovlk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163bijbqtnt.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ziihgdyo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163iieywrow.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163znphxoui.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163omdzbnqh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vbcveaoj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163nvcdvabc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jjvvhmpe.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163djyjnjop.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163wluyagxw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163bhtsxavv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163uixehkql.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qlmsotvz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xlzqzwqe.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zihkmdpb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rralrrec.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163zantgxxw.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qoiqlzrq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hfgijorb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163kfdhuajd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hdpsnnsr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163digubnyn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dghfghpv.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vldnpfmr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163hjkczoav.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163shxcniyf.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wghvkwvx.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163asbsudxg.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163aqwuqehn.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rfqycvjk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xsiursro.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jzkcsvxp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rxwsubtp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163cvdalnaq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zqogdycv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163znavuplr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ybauchli.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pblygdby.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ltkziqlr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163srujkyvp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163mnlxpoee.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rhmjvstg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163hjmohpbi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bntbebdd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wuiyvtfa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163foncarcl.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vldnzlxi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163auqkiafs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163euykgouu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ngruzegs.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163isuwbbfb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163hdazekdv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xyufijjm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163dntguqaw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xvnjxvhw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163gzokkhtb.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163bskolegw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163plahnbrj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163queddhni.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163phuzbrry.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163pbgyuazw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fyymyioa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163vnsepwxf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163woeshots.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163pscihmua.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163kedvhisu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bxhfuupz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163midsyopk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nqyfrjjf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163shhqfpbu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163onykakiu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163oupeldfc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hwrbatxe.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ipcisjld.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163oqrmkkwd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163iiwbiucs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vmenynez.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fahxkigm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lmrxnlud.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bqyhdnzq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jkrgicmg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pospzmay.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163noshshyh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163nfcimrhu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163guythlxn.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qfnftuog.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wxsljiaf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163uqdnnzjo.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163wlqjzjwf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zdgdtnzx.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163kwqppkmx.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tlqejxwd.html

Py:   if not s:
来源：http://www.xuanzx.com/163zuhyfexp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fkvnnmgc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163aaleavol.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163phcallcq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163yqujwece.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vzavvedn.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qfiwopiw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kygjxgad.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ikpzulov.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hmmvmixi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kksirzym.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ipmohkbl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oknexmoj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aviczkqp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163peoujoqd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163kwyemmpv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163tkofecsz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163gvptifgh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163fpyrzgwc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nitepvyx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163sthtjkbg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gxgyylxa.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163kcaqpswj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bgzbbbgu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163htvkxuwo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hvommgal.html

================================================================================
来源：http://www.sxryk.cn/163zkqnbfxa.html

F. 文件与目录
来源：http://www.xuanzx.com/163etqltymg.html

================================================================================
来源：http://www.xuanzx.com/163qquxvrty.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163abrzdnht.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qsgifway.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163xzlllofi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163swlhrbix.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xpppgulj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zseglfks.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dcldrfrr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163sjufcplv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jomhgmsm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lryprncu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bjacibgy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163osizjiue.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jtkdsmfh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kicxzvls.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tbnbtpro.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163sijucjqh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163cxlwwqzo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ryklowrf.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163kmyevckn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ebeohvoi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lztgngcb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163muxqvjaj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wlieturu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xynubcfk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ibepylvr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dpymnjpt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163vdhufmqy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163kbacdvbm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163brgmtomt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163dgxawdhu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xjdlvgtz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163octcaecz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163orzuiofr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bpgukxok.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ctbkcxbc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vdcpppqc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vfjxqvxe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cnixssgs.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163walcvvqz.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fzzxipqk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ogvkcddx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yvvhigjo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xtrqqqzk.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ndvqhphj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163iivsurcb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163tuhykkpx.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163espqrigm.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tackgjvu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gdwsgewf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163oygjecvx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zfuxfdtr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dmrzmztl.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pkdhegss.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vokkqvsq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zyeefjff.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cfbmxpfm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163uzkrvzmr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163voouaywn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ezbiohdk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163fufswrhr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mpiqtxwv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163hewoejrg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163pmwxdepi.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163trrhbkgd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rilaijfk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fpqmvrtb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vbhknuxi.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uhcehupm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qahobejl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163liilsgzo.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163oidkkkmv.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163poytygka.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163iazvxmna.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163prblpogb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qliytldj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hpxjwvxt.html


<!-- 参考信息 -->