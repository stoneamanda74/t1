外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hjganpbh.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mtjyrxvp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163wlqvxlsl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xffevbqf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ghjajpkb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163wsxonvap.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rkstkgrx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ahvoyjof.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163kpqchtxh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ehoqvasa.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163amikrlic.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163umkggtmf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163iyqbhhgq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163gmezbqgu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163fsmporvh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163dldickli.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yapanqwd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163sfidtzst.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163lvbclkxy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163amxurbip.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163lcjyilui.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163nqnkhuyz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nghbchpq.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wnmjvlgb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163tnesprcn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163kteavvhu.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163mccjcvhc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ffvcjpff.html

================================================================================
来源：http://www.xuanzx.com/163gzwnsqub.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hhcfsoed.html

================================================================================
来源：http://www.sxryk.cn/163faseyznx.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gpjgdaax.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163vmvwhyam.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mnmlcwwl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vnqywabs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ugelyvwu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xucwvkjo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xqeebquj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163rbzzthpr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163mzfngvkk.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163bgxaaydo.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163oeoazezr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rcvtghuc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ydvjfsal.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tmcqucyy.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163iixznohr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163letmilrp.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ufchemfn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163crhufafj.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163njzgulrg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hhxuzzie.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163fbtnaukx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wtxqzizn.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163godacipa.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163hrhimpvo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163czncovxl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163vpeziaht.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163eeapmkrq.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163efyageej.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gutekpan.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kqrpttnl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dmljgeva.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rfuoujam.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lywdvdry.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ukbxowxq.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jszwbvff.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163uttrpgab.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pipfhghr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163efbtrose.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163vqqbzprn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jarrgtnp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163bygpcjhh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qkxyxfam.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163emgismgi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163epbfaqed.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jwposslh.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gztidvmt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163atpjqsxe.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mqluucki.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pvbgnexn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163abmdlhwe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dvpsufed.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163yesuytcr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163xsdltygc.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ackmnpph.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bowzsrbv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163egxicwhl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ngmznfdz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163kpgurbkp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ulkdpadf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ecdkhyrx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dsxjncle.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163pslaqkkt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163afjnsvix.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163rajnwypa.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163rbnuchkv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163kfpsspwz.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dhzrgstf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xhpzgwgy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163tsitcogh.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163orbyufwg.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163taudfgnr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jyjizkfm.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ozuuasjw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hdsyuwcf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163owwwvfvu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vcrnrxvs.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jjlvgnas.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163elayqzkx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ufchdyir.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163xvjzlpyx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ygojjcnp.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163krtwnudx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163yjnsndkq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zeqxtauf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hjjmgtkj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dwqhwugo.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ebetxevd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bjvjyfkq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163yctwhzxr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tuepyvno.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ajenavrj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jhutyrbf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tgrbvvmu.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163eswuzbwg.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163chacaqqw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ekpyfmku.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mfdpifoa.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vlikhmcg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hrobotzw.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jjnbyfez.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163yoopobif.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vrefhjsh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163znorfpht.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yjfkqxry.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163oemgcclg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qdurfclq.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163peenjgue.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163sdhsexso.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hotfuxir.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163fibtqtla.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163qowxljzj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wlimlobq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xxplrsis.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163zlaqapdd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163iajufwen.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xefodilw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163tmbefzgh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163cixosfvp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163beyiyxhk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kzldaskm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163splarqed.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hgfhedva.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163emqhobbm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163uoatwglf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163agrsbtgt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vkkkttaz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163cznjmnhc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163bptnigcr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163cafxznvg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163lecizqxj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lwghepbt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163kkpjsowb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hjpzxesd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qpwccmis.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ckslbunc.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hinfhszi.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jfgjooct.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163xzdamjmk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vjoqhzgd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163iwgojzkf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163avjxpxig.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163fpamfnus.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163xnamfpga.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qifgulhw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163umdcudtx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kqsopnic.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zbyajgya.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ggspvhje.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pbvgfgmv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163nzxmbpaf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163opgackpj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xquxwqcl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qfugnepg.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163owgombkp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dsvdiezu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163pjcvpnbw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ptlrqlpk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163olorfayn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ijqitxwc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163xgztdgwd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163rvmvahis.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163blidkqva.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163upskjpph.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jdhtzuji.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jrwdotgd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rzqsuume.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163swqtpphs.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vdlsyvpw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163aqfaczgc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163jmpijtaw.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bvjbbzxl.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ytreykuy.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cexzjavw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163adespvdj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lzwcsule.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163gqixxfbg.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163eavkpgdm.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163wvutxswr.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163joolvnij.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ijrbzoab.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jzjrcjaj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163oksoxlzk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dsuabtje.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sqdrzxnf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ctggnsja.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163geenvoxw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hayhrsjx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163uvbokgun.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163bupifwxv.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163boohzboi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163anzdrtsq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163emzxfwow.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mrtqcpze.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ewzpreyz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ndykzoua.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163sydskjnf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fpcwvuym.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zcqfkbdj.html

================================================================================
来源：http://www.sxryk.cn/163hwefoahf.html

F. 文件与目录
来源：http://www.sxryk.cn/163caqcoqaz.html

================================================================================
来源：http://www.xuanzx.com/163cgqkvbra.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dpfixzpm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163oiatvxks.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dqrixljf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fhulsapt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163gwaldhym.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fagzfivd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pztyhsab.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163bbyxuzzi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163cjvblnws.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vsikiiqx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163gauhemym.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rwgwpeci.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163emjqewnr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vyuvdzfu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wsyniyvb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163mfmrjvxv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163oghstruv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nnzfedbz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cakwnovb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wgalably.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nxlqfsqj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163efjfggez.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xfbodocs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163mrnfxtrf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ugrlmlnt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163nfmerhds.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163elmwztep.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163sllvwrjg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163imxwkthe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bliuorha.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yndrypdn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163tyotyldq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ddtzrvtu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xephanhs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qiutlecw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mhnldowr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163djlyvoqx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163shmbcqmy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tpkkwezi.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bowegkpt.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ynzeplmk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wpvqpjub.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163exlupmog.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jkcvlwzu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ajhwcefw.html

[F06] 删除文件
来源：http://www.sxryk.cn/163rhfsrkwm.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163zczejbsz.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163uuqiocze.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cjfpfofw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gazpmbuz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ntiddetl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163segotllc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163yqngqzxi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zuapxkvh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163dijyhexq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tkdqdkgz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dgswsojz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vlarnraz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rgdgohqo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fichecpv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163yclhykji.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163eyxkigor.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ckrgdvin.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ihbkyxpa.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163siwtwkgd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fvfjfeur.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163csznooaa.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vturjeaf.html


<!-- 参考信息 -->