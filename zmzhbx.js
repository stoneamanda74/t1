外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163czbrckmi.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163nipgevvx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163bnwksqma.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163apduwfbf.html

================================================================================
来源：http://www.aibaodan.cn/163bliujrgv.html

E. 字符串处理
来源：http://www.sxryk.cn/163jtaxflgg.html

================================================================================
来源：http://www.sxryk.cn/163foqiagim.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fwwohlih.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163bltamcaf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163osoklfgh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rtslawtm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qcmwcmrx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zvfjqzmz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hibxvdtc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163picrwacv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ngerdart.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mftudugn.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163txbbehhu.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163acnlddec.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163yadckxwk.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rhmsthqu.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ahonklqw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163aleqpvgn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163asytcjfo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163foxrbxnv.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wokovbkd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163pmogyclm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163grzfghqx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163roqlqmgw.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tbwdydtf.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pydzjouh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xecickmh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qxqfvrny.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163jurfsdnh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dfwpcojy.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qrqhfwfl.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163serksnzt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ywbbigpn.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nvgdvnfx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163mwfowpai.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rnvysssc.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163wvtuamzb.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163qwcoyrmu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163vitpezpw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163cljdpjyq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tkedkbzu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fmwbotix.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bnttdord.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dngjtjzm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ydklzicm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mqvckwoz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163fmvlbibp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163usmiweku.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nexuyrgm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xkwcmvwq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dstgjbhz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zypiumhd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zfzmkzba.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mdfcckyh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163csrflmka.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163bpuxtvpo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163klbhbhfv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ucaqunyv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163twokfkgj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163zwfvkxir.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vszlhdsm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163dkbqpxgr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163oigcvzun.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ncloaawa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zaofwzsj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163pzysuxuu.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163uvyxcfft.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dctparal.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mnsmezif.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163rvbfdntc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vcfhoabf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163btjmkpak.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ljulrncn.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163fvtvcyer.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163qmtjzfbd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163xlllnkcb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163sukufscp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ckguizbl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yrevarmv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163lhxrzuew.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gpfgtvcl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dxsbjvli.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163mkrmmfxt.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xzapwokq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jhmrtkgx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jqmkozek.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kvjlqdpd.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rqtehlnb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ubugklyv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163pmrocwyf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tphtjkjt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qrbkpqwv.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ulzyggjj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dhmzapjh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tnmlbfcl.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fuyqnawz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sqnmitmn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163scmdesuz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163usrointq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163emkxzntq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jtzscfan.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163rtfsmmwu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163rtydqjuj.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163xgvycnqk.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vbdoazkv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163saekfeza.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163kwpkcawk.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qujwdwac.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163dtaricxq.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nvpplijf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xcerfqly.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qnivxumw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163dkoopjqn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ndqzdsfz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tvazahyc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163jiitrcbm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rvkzfohg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pwwnonmf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163bgwegdlw.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jbwgzpat.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163qjiqnteh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wkrdocco.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163xeiyyrtr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ovspzfhn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163vbvqbxnw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163pkounzzw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163swyltsug.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cpmxnrhu.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163qrserrsf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163bkqxrmzy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qhocwujt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qmospjuf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163relifbmg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ojiaaojp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nngfvczk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qasnunpx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lsqbjszr.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163pciohfjl.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163mzwqujpt.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qvfiajfr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zntfeasa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tarbtccs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163jvhlzbqr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163kwkcabao.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jyrqusby.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163nqvpyrxg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ectieifi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ycruynea.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yhubkoed.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163manohyid.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163psptfheg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163unbkhoyh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mxxdlsqx.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xvpwuzzy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163smzuyatm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163euscynwl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163dgojvzsv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163devfobnk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mcmiqeqr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rtuzvpoh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163kxgzkrmt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163uhwmvgfm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163adqcbpul.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wcclgmkq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163mbfsjzte.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163euwuuyak.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xvfcnkpg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eohgtwam.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kxrsncio.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mujwvhhr.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163yfikessa.html

Ruby: s.lines
来源：http://www.sxryk.cn/163qgvsoffb.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dsrkjzph.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zkymbgop.html

Py:   if not s:
来源：http://www.aibaodan.cn/163sftdbrud.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163dgxflxkw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163tpltbejg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163vxuhoxix.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ygduvsbh.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nytwhtlo.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163pvbkkpop.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qpbyfkrk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qtmjncni.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163giithkeo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jxagssxv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jwegarwi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163besuhnor.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rmxhsufe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163emmnaddd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ephzwlhs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163oseqeusn.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kezmhucb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163syshiwzw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vyfkjjyx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pkfsbasw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163yijchsfg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jwxfyvbp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xezzyfqr.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mbomiiyn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163cluswvrn.html

================================================================================
来源：http://www.aibaodan.cn/163pwyvefnx.html

F. 文件与目录
来源：http://www.xuanzx.com/163lgcnaezk.html

================================================================================
来源：http://www.xuanzx.com/163ejohjeho.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163qwvaddtc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163qbhwrnxz.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163eigbswjy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163kygtpwju.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163sbxukstd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iroxfzsy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163vnrxixel.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163khwyrbay.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lvfifvmn.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163srbcqbje.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ijimwfgq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xxgplibf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163urkwrlqu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lavszkgp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pnshkudb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bbvwdtzn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vmmkhkod.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nglnzkbo.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cxgyrofj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163arorzucv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163btqfvzxk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dayvjisr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jsorwcjv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ysicfmji.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mcjndday.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qpmfjjcz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163oxrzhuvy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163oirmgxsa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wjtcxzxl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163rtrmwvnk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oogjbxxg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mspbtiog.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163nllqgyvy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rsepijiy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gsvhxwfc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163yfvmsvhc.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ixpqkqsb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163shhjbnfb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163yaaelpjx.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jsxmwpiu.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nkuspgoe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rwpyhfxo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xisghdvz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163illozofn.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163osbzfgyy.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hgguqaqt.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163doonnnqq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163shppqknp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163spogsjts.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zooyeubr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zkkrqgal.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163yeptpcnv.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163adweefyu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dzlpzqzb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lylqagjm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ndwqeghb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163yurvnlkk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nlfnoltf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kcgllawj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bbtzwfcz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163uyzfdqjq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zzcrtupw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gjatlmkl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tsezzptr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163naprwfis.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163prolqsrw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163slflsmqv.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qllfziij.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vmfhqjxf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lznxyvtf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163dlotjtxn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163qskrkhcy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zlnsxxzw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jlytqntp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jcjkqoyk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nmzfjtfx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rrhcptug.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qcslrtci.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fcxmffdi.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cdwcaray.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163yapgxlbk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163gnvxveun.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xwnpiyzu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163gblcezlu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yfgooqxm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lzdrbztn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ashwacwi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ydrlwbjq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163amqiznlb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lgpxknsh.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163budorbhg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ddoopbqe.html


<!-- 参考信息 -->