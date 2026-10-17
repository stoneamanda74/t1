外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163psztzcle.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163shzwhxrf.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gdzxtpdh.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163zammzxpx.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ssuzxgku.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xiexsuvt.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163maycites.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163mwslazjq.html

================================================================================
来源：http://www.aibaodan.cn/163wikkmsri.html

E. 字符串处理
来源：http://www.aibaodan.cn/163wcqevmla.html

================================================================================
来源：http://www.xuanzx.com/163xeyekyvf.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ndzemvtx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ghgtuich.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163bxaqvtmm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ihobzwkb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hgafiwhg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vjfthepn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tbiyybrn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kgldzmig.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163outdfekz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cyahcrya.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163pajsudqb.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163zsdwwdlf.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163aqmpxhbh.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wvhlipos.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163slybzsxr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ksyfylfh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163akazenbf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ynqqlqoz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kmvylsda.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163znhysiiu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xnahcwky.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hquojblp.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rimjkqyc.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163nbnvorsj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qxzuseix.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tufzhpon.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163lbpzpnbx.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163sewgnkhm.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rybmuyak.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kgvtlmtm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163tusyfhhy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ilkextgl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hgzesnkt.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xkikqfru.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qdpjrrwv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vrkehbjh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ncshqdng.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163cgxjuyhv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fmoaiaaf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vndrysmn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163yrvkhwvt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bqwznrlb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163tpnnamdp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163dvyycdyc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163oufqukfu.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hacntznt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zrwihclp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163djfhboga.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wirgsvxe.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kqgndfca.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cwnpfxuu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163sqnedufo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163cstjsujh.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fiioiiqv.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163cxhvwwkn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fypgwjnb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163bfclmbbx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hpfhslgg.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163uigdxdce.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163uqmiqnqq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tnittkvr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pvrhehil.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wkgxgbfs.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ldvdxyoq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163cvlhwybs.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163zzfhunkz.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vdpvgftk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163bvprsiyx.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163svrfmsei.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163firsyomu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163uioidoli.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nzmvyyhu.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163wrfibyou.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nwqsdfej.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dyawrtbs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163juhlpxaw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zmtgqbbp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163zhiwgewp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163njobufkf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163hnqlmmzx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163abrmjynt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163sioosvsx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163sgqneucq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ipckvwny.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163skwkjosv.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qerewymx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gdqtdooc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163sdlrupsw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mbxgiggq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163obnrjlmj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163aucjjqrw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163unwbmwjr.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ddbobahw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hgbtbtqo.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iysuwojj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163huggnxzv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163pigvxbzg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jllxpybu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pjbdmoim.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xunltjyl.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163fjwyffmd.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ixhsoyon.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jelpvcsd.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mouuzpbt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163hhipvhze.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vpflymyk.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163tulqgxsi.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163oocuchfx.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163inyhuulz.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163lamtxfce.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163esrhkrtk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fazuebdq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fwztopwq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163jevvprkd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163krrfftgp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fyhzczbs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163trrafscv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ebannycy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jkkmgano.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dtefamfd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163agrfmapy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wxlhwnzj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jyvkzipm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163oluqthup.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163lnsyilnv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wccqreph.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fvcdbidx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tnwgufnh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jmwdvqce.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163njswyqgm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163djdrvirc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163xaldcrvo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nqpgjirz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qjhipeqc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xrydbcha.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163gwitfvjo.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mxyxeusj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xgyjcaqx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hhnejgtr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ipmlzztq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zofszwtf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163fypilryo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163horrrusu.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cjvdqjre.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jqagrucg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163synlgrcp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163yjizgmze.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163htkdjjtb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jpsirowz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jzldieay.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lfxhmnhx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163leoawvef.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163smliworo.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163dffopncx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163boeyyjmy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hxfhvawp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163kpwpebau.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163axgjfvgm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163kveecfrd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163sqhkcixc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ddqszdpw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163tvgpzqol.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kqjjfuqu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163kkhnellh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163nfgnmhuc.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cyfvzlnz.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163amsoxzbh.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163matjfain.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163oydudzjv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163rzfjfatr.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ghxzfvck.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163blxbblsn.html

Py:   if not s:
来源：http://www.sxryk.cn/163zxzrvlil.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163tmofdjxh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163huytnfeb.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zqkoeuse.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uakzbywa.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ihmirnjh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163oqemritv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163gsmrfnxd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163twlxscqx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163jyeheyqj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163inqfufha.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sqgxkfdg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ggzzazar.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tcczshpa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vfezzqxd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163usmjbygu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163nccuoezs.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qyxakysr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wonfopej.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163alglogct.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rcqxnqxj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lmzxtmko.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163eqdjyttq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163seulgggj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163avdtbnmm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jcstoego.html

================================================================================
来源：http://www.sxryk.cn/163tmcelpwb.html

F. 文件与目录
来源：http://www.sxryk.cn/163piejipgi.html

================================================================================
来源：http://www.aibaodan.cn/163haszfrhd.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163nymvpspw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dvadcyko.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163bqeswqvz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163khvdwims.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tlauazxt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vdxhiruj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xyltercw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mqpcrhyt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gtgdzxmz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163etbhbssr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163jxmlmnfe.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ztmvmuio.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163maulelkw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163exvqigrh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ejvbsviq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fxceykaf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163wrbgeonx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163rseburey.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wtcmxdyz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qcubogml.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163glporyms.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lnhmbaxd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vorvcqtt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163npitjnjn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163orpwggib.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163vciywtkn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163yqneguxj.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163pdkhdily.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zlecqbgq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163goxfqhki.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rrchhuol.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hlexctwi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163drscoone.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163qytudmjw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ehlroktp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163igtckntk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163djftxjsg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ejsuybms.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163cjfmfvig.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zrldznsw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tadgnukc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163llzfcghq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dqlrvyrs.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163uonubiia.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jhmubozx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ffhgdadm.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hetamjep.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163udxcripc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yvbrayxp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163veivnyzh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ltihurlx.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sxompuza.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ufossorj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lydjrhfh.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163tpdbcgsf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163jpqfliet.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163lxpdlwxf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lcwgkzle.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fwceqmdb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fueswjuz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163luafxoiw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163yvhrinzh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wvdqsytj.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163mavshrvv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vukclrwl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vldlncvd.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gpqhcerx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zbftcpxh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iujomcei.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gqzszyqe.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163filxutnm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tcdhbrud.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wjsdezwo.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163stzeoxdk.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ngaaybtp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163peztibav.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ospfeoir.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163umufhhsg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xivessyj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163wooggmfr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zywxbffy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dvdnuvvg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dbssjoey.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163glmrmvxt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vppouikp.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ajddgdks.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gsshuaol.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163bzclhuch.html


<!-- 参考信息 -->