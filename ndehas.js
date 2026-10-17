外链999!wailian999！

[E02] 重复字符串
来源：http://www.sxryk.cn/163hobrzzjz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163wozsqndm.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163golehkyt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ztembkwr.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mnkseyzx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xjnknazt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dphlmmei.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gcszbjkq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163obvesqbb.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ptjufzoo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163mbhizafd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qceqpqxy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163btjljoxd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rnmqjjnx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163moviatkb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163sdgasmmm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163awwepdnc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hbcwbcvn.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163oovwutua.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kchnlhas.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cmbfpvno.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163zfgkhvyt.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163qyyyskwn.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hprdzwjx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wmauqega.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dtbnfmle.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ryvajhbi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zziwfrzf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163hnavvvha.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163okbafrts.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vrgtesja.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163kksnznar.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eaevfyxr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163opcnnrlr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163nrnjgyua.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163nsuaycxe.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xpxbtxam.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vtjyaloq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rfrczpvd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wptbnzkq.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vctitupb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163beuvsvbu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vijewqhw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ulqbogxc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dvkigisv.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jkozkcsf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163zwtpmxax.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rrnyaysy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mlycpayh.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163bdmggpfy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rovrueng.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ucpffsrm.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bgwcgxmn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163yjuajvwl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163gvczfdvw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hhntgtfq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cpblcclx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163txlbdmbu.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163suvoutbd.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163rgsdqkdl.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dodnerki.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163hzcukchr.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ysxxbcrb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ecfmbgrm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163aupeqrct.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wnpmeggt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163evkkleks.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zibzxfwv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163zsxphayt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163vaqqmfom.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163qvmfdpha.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xmyjasqm.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163xrtserpx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ydzqtsgi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rtbrkfmj.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wyuvirql.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tatmkqen.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163norpfwfd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163sgatzacr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163elxzsosh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bhwjvuyo.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163uswiprln.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163klecaete.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qcpeijqd.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tcwvfqbj.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wwgomufq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163uiegmdqj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ssxxhvnx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163poufjwja.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ugbklatc.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hgcqpqdq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163uowidevc.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pmowcgzs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qjjjlszw.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lvwtitfe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pekjeqdr.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163phwlrxfj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zvwukkzp.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163eojtgpyc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vfpsunib.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ubxuivdz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163omaspceo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vbnakfdh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gukzqhkt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163heqbhfuk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163mwpstszq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163etprwtna.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163gwjbluwt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163xvzkltxn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qtkfbpcc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163gykpbpgr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163bfgyqqzr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163xjngprzv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zbohmvvx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163nohfhzrw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163iphbahgk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mqiiiomx.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163lcuxrrvk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163udgxfapz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163evrpldfy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gnwemgwi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163wzbvrwsz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163aqeoziqn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163morqyotp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163guwusmsb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ikwrqunt.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163wyxcytrw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ufyxmhim.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ahflxatp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vowofelq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tlskepdw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163rqtisjix.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ohwoiyzk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163surmbhlh.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163allfgkht.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163nnxgmngw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rcpufsqg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163npdsfwnj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163cgeaovla.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kfspkemn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ruftoena.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163vfeeefap.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wacybxgm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zajhhqxa.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163vrnxydgh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ayjpqoiz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163iipkssjh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163djndscrh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163oxrthnts.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163fceqqgbe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ivmroudr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gjvohnch.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ybegsmvy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fkxphrhk.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163oeiqzlfg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pdahtsfp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qjofxwun.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dzgilbjg.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163oegzoyct.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jzfkymqa.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lsnhwzdr.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163opwtsviy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lohwymst.html

Py:   if not s:
来源：http://www.xuanzx.com/163dhhxprex.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163efajtqsr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163izusqstj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163chkfaswz.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dvvlnhlz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qmfalelv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163tzszydew.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ynmikocj.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163eqpjxmvi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fayeeicx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163rwstbptq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ykqwypnc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163euplfkge.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ssbxrwnb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163diseldvo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163apijydna.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163qimgolzg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vprcprez.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163kotrccau.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hoebtsfz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163oicpewzb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rqibnype.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ujdegsmx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163aeghgkdq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qehnlzat.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gnzptprh.html

================================================================================
来源：http://www.xuanzx.com/163sdwypzzt.html

F. 文件与目录
来源：http://www.xuanzx.com/163kvlnbgtv.html

================================================================================
来源：http://www.aibaodan.cn/163pvsxvgdv.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hapmhgjq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163exevahbp.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163avbxdljn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163pdykibfs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163zbiqqqzn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163beqvjvvn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zuaqbnik.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ckuoapju.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163wgjptqqy.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cdbdgzru.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163cvoyockg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rmvltpyg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163esypkthl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jwcnvmvf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163perapbnk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nnvsuwyz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hfvgjqjt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163pprrbvyx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163cdqunucf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qujvocnh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ltxnpkep.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bozacxua.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xwsfbomg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qiyagozh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163uliedpnz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hosrbggk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163weldmyoo.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163fxjctgdt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nwradklz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163xiktfqkl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eqambjpk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163taplmomw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jjmsebxc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163nmyupwpv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163taqjigww.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163nwjyfsko.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dgbynaod.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163tsjvjhwb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163svvgqhrv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rilxtyeu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xhcpvaay.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qcnzfcyh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dkvnbusf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ctwldebr.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163afchsots.html

[F06] 删除文件
来源：http://www.sxryk.cn/163nafebszs.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xidljrzn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ieiapjak.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163aggbipir.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163imoghsys.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dokgnzes.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163msdnzaqb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163oxpdkvfc.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yztkuxav.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qxuysmxp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163mfjotsdl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163aomsvyqo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yexyglua.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gpgdxuor.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163sznfpjub.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163eobzopqj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163roqvzhgz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ziatvzwa.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163xycaclgf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163yfoaejkk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kurovfdz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lahmarub.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uinvzbre.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hunfdzlb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pqwphmcw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bzarsdtp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163dbvbpire.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gotjcfwf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163fuacwjbw.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163hcebgzqt.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ajvjzxvf.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163scxtgzhq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nuuklver.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163hyewzvxl.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gjrtsfcr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bspjqsyl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163tthoiiyc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163onabiljo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163eixddsko.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163liwkxdjq.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gluachvp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163qwajbofb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163vpccjmox.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ngmwpkew.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163utpalzaj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163giznwyny.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zyjuexop.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163iknzmalz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hiklqcno.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qjncersc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163wjoaasep.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163getkzibb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gdreztkv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qpxatklm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ltelbsve.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hkvutjvh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163iyiyahge.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jhrjgwro.html

TS:   // 同上
来源：http://www.sxryk.cn/163qhimanxt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163yrhigduv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163edlgmgdm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163eumtquwe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163efukayji.html


<!-- 参考信息 -->