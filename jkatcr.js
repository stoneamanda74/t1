外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163rxvbggyd.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vkodxbqh.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hxxuwajq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163klafssiu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dptlbaaf.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jygadybp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163cfclypbw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ehphswme.html

================================================================================
来源：http://www.aibaodan.cn/163fknmfeqh.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vfbpfxgh.html

================================================================================
来源：http://www.aibaodan.cn/163frkpudmz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qhhcbhkx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vkznlyon.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mihmskzb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rbgcueqx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zkhyusdw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163pyfiswze.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163xbrchmbm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ggjsgbyj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xuknlgtx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zlqrpmbv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zjqbpmod.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163zybuavqa.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dystppci.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163awngmjqn.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fyazhraq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hnnzhrwq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ggjzbkgx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ocmjwtim.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lefexwga.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163itzrtvno.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tkzygfsj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ovtzgshg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fvcehwpx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163hzblfpch.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163yqzgexxd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163dqrolvae.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163nwbgpnii.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163kxtmqofd.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163qcryicqi.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163irwcyflh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163xgtndigk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163obappikp.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lneuichz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dvdzizle.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xisyycfw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ssfheitg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163eegapung.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lsknfvau.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ohrkiyrv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163otifytia.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163euqlspdr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zzbohfue.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163kqhhgdgx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163wnmavxyi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163sihfvkhs.html

[E06] 替换子串
来源：http://www.xuanzx.com/163iksufjhg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163yugoeecx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163zlpzzvdf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rvjiuths.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wfjsbnlp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163benegayi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hojmkwsd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zymbvvib.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163lveqsbja.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xuqehvaf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hihvtngp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vafbljhm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ktkgghrx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163tudxsjlo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163zvbiiesv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163lhfrjffn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xidijczh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rlrpgckp.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163nqmccktp.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163dklmehug.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163qivfaxth.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163komztaft.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jqjmsbsp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tucwdcmb.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gntwutts.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163tfmwugwa.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wscuwbrp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hfzzkcuu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qxsqnpan.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163htljkcfw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yrqexoyh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cjhrmsuc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163zxrafons.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tfkmyrev.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163uphsofxs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163cxeiwbtk.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vltvnjlc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ofskqnma.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163avfzvbce.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ppgvills.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wkkxmtin.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163cghlesqa.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163sbmmtptw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xuvhppzl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163eenagpwd.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163clwmqjdi.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163nsvdgmqv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163dcgkkmwg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tfihmdmm.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lgckchxm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163voxlmkug.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163arnceggc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163suhmkriw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rlxamoab.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163cwqbkjcy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163aixyeeyq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163vykpoldx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cmbstjws.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qkemyuez.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163xoyvidpx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163kidzjnwb.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163yphxazma.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ivlohyuf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ywcprljo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ftzrbnsh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wgeuhzsp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tyfdydfx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gonhcbjd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hwwaghro.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kuwufseq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163azdkboer.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ezgiucpf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163mueosgye.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163gnspngzy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kefungzk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zfxtghkf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163vsofdoln.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163doxdibxi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kqnecejb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dvveucbg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mufmmjxc.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ikvkxucw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163omwxhrcm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ngwsikqk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rfqdlrzp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jqddrcoh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163eniyyckr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163sbuczkgb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163axxfirnb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163dhkildwg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163obgblcmg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bluynlah.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163inoodhoj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163izqmwuhg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pwbhajjo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163laqpmajv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163gmxlquua.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163bnkhretv.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163mlguaxmw.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163adotiarq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163kvwuzqaw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rtvhowlr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lhnfurvm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163izvdgafb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163nsddhahl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163shxovrfs.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163afzberov.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pdclneht.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163etailstz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rbprefui.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tnswyljk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163equjjdxe.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rjgfrqds.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163rifewsmu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163lqrxznic.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gbvyclyj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163xlxamvbc.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ojfpwavu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163sctrxsgr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hitftibk.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163aovlopsw.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163yjxjixki.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163fgqprtwh.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ndlovftp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163qhmujled.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yzzkkoiu.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ejaddbih.html

Py:   if not s:
来源：http://www.xuanzx.com/163kealousl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163nfalhedg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wimxlmcp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ovpeahqb.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163vbnmiwav.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163esxepptz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163kkloyawq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tpvcsoxo.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163grdsiaio.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zaxqprls.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163fsecbsbu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ivhoirkm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qpypshco.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cywzavdj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jkmwpwaq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wjfqhapx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163iljqxbvc.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xjazjiki.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163phepzcqj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pzwjfbnr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rweyejmt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cbvomxbm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163unxfvond.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163abmpnilc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163sylqwzmj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ndenwrhr.html

================================================================================
来源：http://www.xuanzx.com/163wfsikxuk.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ouvcatsc.html

================================================================================
来源：http://www.aibaodan.cn/163zacuresr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fjbderpn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rwvrtutc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mgjqquwy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163orwmpexm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ffdwgeoj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ubchtcrn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163pxnwadze.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163julvtsnq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163heuwxyrc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mpzknzqa.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163pvrpnqkv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ubfuklih.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pzucsuwi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kxrabwbz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ixakgdvf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163mprbmjbk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lmzxhlmk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hmfpmdtd.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xwitcpxq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163hvgjaaap.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vaknrarr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163iuqpgsic.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uuxvtuwu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163tukctkeg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163uqxlhvmd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163wfnpygye.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163umdhhrbi.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fcjgyodv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163yeqauyeb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163xutiezrz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rodxaete.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bjbupnao.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hlmaoixb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163kpkeclvo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163zvkkbvwz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163yoxvtxxb.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163txvzlaze.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163joukwjuf.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ewxdrilq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dquzmoyk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ldnobtax.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cbfgpzdk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qdyvjofm.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ywyzxapl.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kvnvjemb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xmqvxznl.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bxzmzmmc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xababofw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dhyhezxk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xwsvbfhm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mqxehkme.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163gylectok.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163hbkapulm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163cisysakk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163aoypezpk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yjptfefs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163yctlbkex.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ujevitmh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163nybcadzx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163nonbkbpd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gayozldd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163isebappm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163feuamcwn.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rkrixaah.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163opmrorlu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vfhgjiyd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ikzhzcnh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ynrhkrja.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163veiwxphr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tuwofjld.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xmhwuxwh.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163brosaokv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163hbybyeqm.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jueumgwg.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nmqkibba.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163flsqdeig.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ayshbkez.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163egynpuia.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163kkptpbiw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163yudscmeb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lzzrkrqr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163edtyzbnb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kmjpkmek.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163pnfevily.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dxewduxb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zkzszcyc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ofaquhbe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kqhomhhj.html


<!-- 参考信息 -->