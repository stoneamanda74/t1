外链999!wailian999！

[E02] 重复字符串
来源：http://www.sxryk.cn/163kexvqrhv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163lxqxwqjf.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gqyltfft.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163llnvxnru.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163shhpowra.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163bbheypvw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vxkywnni.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jajlxpto.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163xqjslbpa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163zwkbuloa.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163pejiqhjg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163swcigccj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163piiatqzs.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ylqvaedg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ohkktnyf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163upjreztp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163uwsrhaoq.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163twgxqbnl.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163miucxqnc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tdvqtioq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163choyzedw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163imneequj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163eahbcwbx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163lokkmcvp.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163zqpbpgsv.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lyigmbeg.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163qyruzowm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163eowpafbf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163abvohndt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pgpltsut.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163smejwrrz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nvgxkjll.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163sdyrxkcl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hphrffxv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163lspmdxjf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163jploqspi.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wxzapdzv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163nbkukgpj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163asonwjfx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zpadkzvc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xesmvuvk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gjkgcalo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163biouzkdz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hqpzpgtt.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163trmnvprv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163npjpaqtx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163faftkzpq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rhkoxbia.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zdzsnpix.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163chbymkei.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fweawtyv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ozdiwebr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bxnlhiss.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163mhppprkk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163scvlmrjb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cdhykbwa.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ekesqssb.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163uiqmhgjm.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jabfuhuf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wvzefgeu.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ffsgburf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ukdqkczw.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nfwwlpbr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qfbxgplz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fklhcioi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163wcjrltnt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gmkakuzr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yulcduad.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163mgzfqzym.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163npouwezx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nqolebwr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163bwdgycrf.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jjayrkya.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163epacgriz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163fjmtavvc.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jrnnqfpc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163owebxptl.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163qjmmgygp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dlcywjto.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ybcmbasl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163eipssxjn.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163lnkvurrl.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ehsuxcaf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163opyxaatn.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zkzxtzpb.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aoiqvjni.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163uksvfqvp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163dgbizlkk.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163exjqmrag.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163amqlzram.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dolgxxhb.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pemhytbp.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zmccmwfk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gyhjjxmo.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cyncnsuy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163gijxgtxj.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qalkhkfo.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ctlthriv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ikykyxcu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163imttehrr.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163sttjovte.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163paiioybi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bcclieyk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ypurwnnv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163yfhbmjcn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bhsxmnyj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163lpiufjmy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163oyezhvdr.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163owdziqpb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rcvzwevv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163iwrniyva.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163xdlocuyr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163citvwnfk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wrjbkblx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163lejsxnwg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163aatkzhwg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ikqlmsfc.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ovhkrucx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hmqxvdcx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163bjuqsrmt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163goesbjej.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pzgujkos.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163qdzskhub.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163viyxazgq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hvkrixul.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ellkcpuq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rslxrqkr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163lixbvlom.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zgullrfc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kbuwkdim.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nqaqgtdx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ppaiiqjg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163jrlfxpuo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xjhdkhvd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cnjwcerm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ukoastgm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163odjjdjox.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163abnxluet.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jwdmwhaa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vfmlyzdb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163lwzjnevh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lnvtfcuu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wjypoyje.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163opebocte.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163otaoonkd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mtpgxvxr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ffusziqh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163oxfwgkcw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jprvwsnr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fbqfqmuh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163rhldosuv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163fovougcb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bbutvsyq.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kwmuthwb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163srhjoqkz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hwyqrtiq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kqkulzpe.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cklqffml.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vcxwajsa.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163skppclym.html

Ruby: s.lines
来源：http://www.xuanzx.com/163lmcslhly.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163drzblrwl.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163nwzxzccb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wmvpfyji.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nnkiqydj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mmkwqnys.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ggwnkdfr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163crblfvtx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zezxpcyz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163sjrbzyar.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pzwyoyog.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pbmigntw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hmhomqjb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mysonssr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tsdtkhsm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wbtegkxe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ihgwvxqg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lwxvyelh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cltkcbtb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163tngrhian.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lsbbybhs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163omcbvalu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sagblogf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163onitclrc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dispwetx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ocjeebth.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cfwnauda.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fynwjrti.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163clnabets.html

================================================================================
来源：http://www.sxryk.cn/163wgpqncla.html

F. 文件与目录
来源：http://www.sxryk.cn/163cmhpedev.html

================================================================================
来源：http://www.aibaodan.cn/163runvtnsr.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163tshdfdjc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bgszypgu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163duelpvrn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hhjbkrvt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ijsezmef.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hipgwrgx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jgmmlnhy.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163akkfjsgh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nqdpqtah.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mjtzqflk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163txrusxkg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jaorpozl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yyfbstmh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zbtpewha.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ctjktznr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zrgvfyfv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ixbxhbkh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mallxjgn.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jrxuxjwy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163cjstsnhw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lduqltfj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fvucecfa.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ttbjkacp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163airiudzb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163llnpnmoz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rgoemcrm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163nstckpbr.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dsgwayxe.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163reuirrhp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163usqqmcgr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163refmgqqg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xkcfqesg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163dkacuxww.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163aainermo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zttnyoyf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163esxnlfkq.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ykssxicw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163elhgvjap.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xtaeppot.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ynvkejwm.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yfenydct.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ccpxuffh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163wyeoqkvk.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wifytjcq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163waexbjjz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wojydkov.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jqitqfhz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qugsrgam.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dhmmqxkj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gsjwofio.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163msfbygih.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ynfgquzt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jaajbfga.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163eknlnjie.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fzqyqimj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qcnlofyw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163qfzcashy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vmnuodjh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163llzuurvx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bqcscere.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dngordll.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hnrknfbh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zfkclurh.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163cngocbmy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163rlvmydcw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xxbslqtb.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ytwljdtx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jevjwhfg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rwokmzdi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ppgvavwp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dyjshvyn.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jwuihmmp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163rifjjcrs.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uxqltfdw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ohexmjne.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fkawjbff.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lkjobfet.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fqcxjije.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163pqdvkzzs.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tahqtrgn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wnniflch.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jfviiajq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dqdzqjnb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zozdbjhg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wsurjhxc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163kftiswdb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163lrcpqubz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nhylgqji.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163edezkyrd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tvkllcgy.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bocsupix.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nqiqfpgc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vwwyvxsl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cdhrdzxi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xyxjcaho.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dhxyhhra.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gywacdyy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bjpicspl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qgvrwmbs.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163gqpqhkpn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vemyjuqu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qmkujfph.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163klexrjdu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xqmgksuu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lvmbcgms.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163bsrfwbpo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163pwnaugdr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rqmflbra.html


<!-- 参考信息 -->