外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zgvdiabd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163zjhkncgy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163osabweyn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163wawascwv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163terpdnzx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gyvucbxb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163twnztbev.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163dxygyxxi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rjwtdpno.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gjcvtaum.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jlrygsuh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vxffhutp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jzvcssqe.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163haejmazp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kwokqrrt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163lhvsgcup.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163aerzthjo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163fptwbocx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rcdwsjqw.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163npbypapz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163yrakrqob.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163klziaeur.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fzxeevuy.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ektlbiqa.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gagrirso.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163rfnasiih.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163drthapsn.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fmcuhkvq.html

================================================================================
来源：http://www.sxryk.cn/163yevpkkdt.html

E. 字符串处理
来源：http://www.sxryk.cn/163agfxnysv.html

================================================================================
来源：http://www.aibaodan.cn/163xoeikvfu.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163yefpmfjf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mtyjnutc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rslazvmm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vrmnlesd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163riuifyow.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jnkzvqna.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qiequzfj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cdwglbvf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ilyizbma.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163kivafsxf.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fhbwidnh.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163cqwynzpu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uhensjzk.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163edfrzcny.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163nratxszy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163arjghwvn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163bzsivyhq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ivagxfsd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163fncggcuj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mtnlqdmp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bipiebeh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163kxnxgnje.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163yeswlcex.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rrwgrdmg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163haquwhvi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xwjuewxp.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ysuaxmin.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163brruyydt.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qvbgtqnp.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163prpckixu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ojujpszu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163beuhjxme.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163zgdthaie.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163iautxfmm.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nwbjzdgm.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163uwwsqeui.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qkemmfwl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163biratnhe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163chvmchrz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xbdynvns.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163aeloszbf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wlcbgalx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ahzszzzf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163igghhupm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163sgdtarkb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163uthhqvce.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ynvuunbh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163divgitrv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ixvzuwps.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tficfsdj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zvefovjd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163krutifga.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163diobrfxw.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ausmreeq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zftylgrf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163bjshaqxm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163uufkudzm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163diqvxvps.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163lejzcqid.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163fkonnenp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163pfyzveta.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163khgwgpom.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wdphkxlt.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xydrmfbk.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163zltyenlp.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163javohjuu.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qezbhbrs.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163nvamzblb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pyzvmgds.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163cbqnairy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ahqxdgsz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cganwxsd.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163stpmshhu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wibxuaaz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zukulkhp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qtjciaor.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rkouwjxe.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ywagfhol.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qqryvunp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rzvrlhkp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163twvecskb.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hxjbrsmm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ylroujen.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163yisdijvz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mskhjqfw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vlsjfung.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163onwzwugq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ksmyalwl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163sugaxuha.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163wpgobvtr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dryzybpd.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163zoachcsb.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163yiucnlnh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bufrazsz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nkzitsah.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zmjdbmtx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163pzpbziix.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163nlhgrkas.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zfukxoxu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ibjcsmrv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hiwlarrg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vtfdtsrd.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cgfjrtdg.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zpjkyzca.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163nosvvqic.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zabvjxme.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163dolasbwq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tthaxmyd.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163eotjsfst.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wqldkvwl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pyzaykxc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hufwbgnp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pvpohilk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163aqqbvzho.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zwrrcwtd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163neiexhhk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163inyzpkoo.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vncmyiub.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163mxbqlwas.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nbgwikyu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163rdhmguud.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hgyxygjo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gwzmulbs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wgsnrvxw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163uvopfrhg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163dqfcsksj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163qrjoolhd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ncdzyfwd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163kfhvytul.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163owywaqfh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163hflxympv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163qjglyyvh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gvhuwevn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ampaylvj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163azrhbcaj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qrgemanx.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163pgfktwkq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hnqvxhsc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lplznvkl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163snjnfplz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163swsispvb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163lthdzrih.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163leavvcrz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163dsbdujdx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163lgzxpqtp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163eooxoitz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163cfurozxv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vujucssd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163eqpgsxep.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163nddcymts.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xxtnkfzc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tdratpmc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163aolqnzzl.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163vrgtqvir.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163iwiyoqqp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163isgklgoa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ocuioaty.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bhuikigc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ptoiltgw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163iddupcru.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vrswwqyw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bcgwiwvy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xmomejxc.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163vmealvls.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163txmgnked.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zyvdqeyk.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lojsemmv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vqzpbhpt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fdzoqbhp.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ngkuqwsk.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tedagkga.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163dbdbyscb.html

Py:   if not s:
来源：http://www.xuanzx.com/163kouahdea.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163dnefssss.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gfjfiybu.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163mnikcaqn.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163egigsatr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nqtiohwu.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tgngoevk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163oaimjsnk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163obxjzpls.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163rjaveiej.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xququytz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ikrsiodu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vhgkkzrc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163edyrzqie.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ruobkfse.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kigmjdqr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163iaybakjj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163uurxpznq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163joiewgcu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bgxjmrwj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sqmaytjq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iwnpsqrh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163bzxzwsgf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163kxgzimxx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gogkaibz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163arqaakkx.html

================================================================================
来源：http://www.aibaodan.cn/163nldcxmrg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163bcvhhfkd.html

================================================================================
来源：http://www.aibaodan.cn/163uvrfpxzf.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163axjgtqhg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163tldfhfnk.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ptkgrven.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163lhyevxao.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rrvbcpcj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gmnxwmga.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163tjzboiay.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163czrwbmha.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163tvsxuihh.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wvamagst.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163oavvjthj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163krcbgirp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bwhyqnbx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163myqhusal.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163boregpve.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fgelkmim.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163gnsrgomy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ndrsrwlr.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163pgctmgwc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vfwmekcr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qhrppnym.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hqlbnfur.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dgdonivh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kmgjcaxs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163npzkvwwy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163svdclnkv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jivsiwog.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163rmgocacp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163cafhzvxl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zfxxrteb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mhxidqnw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tkkzlqyk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163cszriewg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gmrhyvpf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163cdtlkajd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163helugcca.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163imshosxi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hrtkxvds.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163qqvvieyn.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ymljsrvp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ahajzjev.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ellwcjcw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jezifbib.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ysvpjbgu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163uvaphpfo.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ljihxjnu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fgixkban.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163yirymisr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ruyuqepi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rtkbelyc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163stewzsov.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163aclwsxqh.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163mvpnvjdl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dgkgffce.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163jdmzcwfi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fgfqzrgd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163oyaldlwv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gzduoqxy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jcobmmrq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163jxrtnayo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163argsnxyi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163tzbtbxod.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ytgoyyci.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ismkgmrf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163afgwlwbu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163uxawawdq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163aybfmhim.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gnouneod.html


<!-- 参考信息 -->