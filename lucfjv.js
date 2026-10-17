外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163xthcudtn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163knmfbogf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uddvcjyv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163iohoytfq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163fchuttsx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jbsjbzlf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wfbmdvdl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163lvaqlvdd.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qbzhniun.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163gkfqgswu.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rdiqhqkd.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ukvzyhvm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jynwfaxz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163iyxelfjj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ptngfqbg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bpkgdiko.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vhtekfvf.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163hgzoofai.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163agoontag.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vuhrztze.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163xnwowwcs.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ohevlkbr.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163gvlbkuww.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163kxacsjca.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ockpnlid.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163rhnpjvqu.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163omvfqvel.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163eopvbxei.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163vohnlyto.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163lhcognty.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kvqivbuy.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163prpquzya.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ithhdute.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163uleqjoxe.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163lhmosccz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163uqpjtpll.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ydoulegx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163qdjgbcjt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ykvvnkkb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wfbhgfqn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zyoyuulo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163xujtogbc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163nunsymef.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ugzgxzna.html

[E06] 替换子串
来源：http://www.sxryk.cn/163sqhryndi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zvwyokif.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bskcjznk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pouslmfr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cquuhyfn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163okitpzoh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163numptnzt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163yucbxree.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163guijsldf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163npakrzsj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ojvgjrys.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ozoxtqfs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ubdgcmtq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163opkwyjrf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163njnsakam.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ggvzfwdb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vkpvchmk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163axoyumwe.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ugpbgomn.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163fdbxivrm.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163oebmwxzv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163lofvmsbg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163tbfzfdui.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mbilpbyy.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ujnzjvuu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163eptdcbzf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mwyozrac.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mcksmtlt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163eytbbhzq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163esectpou.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gxxvcvju.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kqdscrct.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qtfsxaqg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163cyqonggg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163iqxibaqw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ebuyhuwj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163xruqzuyg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vxenorpm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mrntdlce.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jgotythp.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nqrnntej.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163iajfldwq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163lfqifnsf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163tlyelwgb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163cwuvszoy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163bxpfgkkp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163yhqniojm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163nrfnzymi.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kdbhlcdm.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zvwlgpjg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bdaygnuz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163bhmsflqn.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163hevykuvg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dfmctdtd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163nhoqerrw.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ynefaheg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vxmhhdgh.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ifiwydox.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kkmgrxdk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163cnjrkmax.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qqcjbsiz.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163znnpuqdy.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163xdldlabn.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163gimeyfqx.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pgviyjga.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ognsndbj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wbjbdwul.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vjsmvkpa.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163gpjtvccb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163nbktjdyd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163cvryabjz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163oawliwhp.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ilvcyhlr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kltxustx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ymukjfwy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163avekpxcj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163nylexipj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163sltramzl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163rffnypwy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xhsdchib.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163bloegrcm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163jcpxbsvo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163xsfyjaym.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163pbluogwl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qowprwat.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163pjqiefrb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163nvlgbnlj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hyijytst.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163zdlovetu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lqcsfeme.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163pvdrwoaa.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qsnympej.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163jcxwxsib.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ybwrblnu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wmavjlea.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163gbuqkjdb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ffbmexrr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163afxihrgu.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163aextwwuz.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vkkpzbio.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163punfhmgv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bfdxlacc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vhdysqce.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gtcowasj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163xidoccyk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163pksxjblh.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163vuojfbdd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163lirsgfrv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163xsxyfyjn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163xgezxtxd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vcpivjni.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lbbwpgnm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ssrbmufe.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163juceznzk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dwufwhlb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163enrreuul.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163lthhalcv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zwjjkaim.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163evkrpbyk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ppmfrxkm.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nnaockvo.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pzdihdzv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rwfnahbn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ddxgfvnn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ulsfffkw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163khuaklmu.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163drydmvkm.html

Py:   if not s:
来源：http://www.xuanzx.com/163gcypkgdo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163egfqrhgh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163uvolfmyj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sgxfvahl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163zxyzyohx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163defzpyfc.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163eiypknab.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ltmanrge.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163uzxrtaja.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163czqjjiho.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nyucnahp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163btmeorif.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dwhgvbiz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nlgwjykg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163umihegcf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rofkrrcn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ciybddnn.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vwdjpsmh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gvydbqjv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xdqsuwhg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163upkboesx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dzccnktt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163pxkjypeg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qosagnwm.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163bxpzdktc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uxcmatbk.html

================================================================================
来源：http://www.aibaodan.cn/163rnajsozs.html

F. 文件与目录
来源：http://www.sxryk.cn/163mjixgkho.html

================================================================================
来源：http://www.sxryk.cn/163yiszmsqo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uvgregfg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163iipathwi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163fcteovwz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163epsqdutd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kalnwgwi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xszwjkon.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163kerfepfi.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163smtgqiwc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163muhnfbjq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rjizeima.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163orwhgctn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163esttnyuh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vejbxgoq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hwhzrdag.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wgfmyasc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163wnzdejan.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163jupzbjcu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vvmvumwq.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163boxvjkgz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sxdnaonq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xuqnixwy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cqjwrami.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yidznocr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163neouvggy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163gdwpsxlv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mwhqqkgm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163abpbiaie.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163sugrkizq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lyvpldnf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163creupbkd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yjowxnjl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pazvkagq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163eqjjmrsh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163cazqnymg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163hsplnhjf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163khvxojup.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wtnaqkia.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xnbaqnnf.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163gcbqnnqq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fvwjsvxk.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163twpestwh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tftmeoao.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163msqldgqt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163amjdrqlx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cjsditov.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lyieacac.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163dmbyqhcw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163wwljerhz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yncsdnfb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163obvcmpyi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zyzcyegm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wykfyvgd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163gadtwyoi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tibxjybc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jhupwmpu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ogbomnjo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163oielaqyt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rbaafcov.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jobuutog.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163svnyxdmj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163kjyzgvbh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rckxbkcb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vucripdn.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fhurgxmq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ndbhgxhh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wnahfrug.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vinbwmsz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163toafgahd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ltwlsles.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163teilzbun.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jgkoomcr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qmlutulm.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gslxwkky.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xpiqttjq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163tirdidwg.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wmfxwlpd.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hhsplvxh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xyxtzprg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163cpzzidns.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zjbprelz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kxurftqp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163hojrvmlm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rnciufso.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163comcwtho.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qogsazby.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163wzxdkqiv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163egkhxnro.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163txtoslvo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fjgamowz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163itxchmos.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163stjhangc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zwwcpmbm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rlzyxeyj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163umzbkzbn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163siodbmsn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163csepymjo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163viscechq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rlqphmqs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bleololq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gyndypny.html


<!-- 参考信息 -->