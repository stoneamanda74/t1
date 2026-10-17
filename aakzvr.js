外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163gedowssy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mhhfylbf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cbpmpyoh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163kwttpfzj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163thukkooh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163kzxylphq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163himhyubo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hxkicydm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ztvmxpgn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163uuzqsklq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rlxovydq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zjfhlyxb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163vhimzukj.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qhoguicp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cyynziap.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kfbtrjzw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ocekbovc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wqwhmioh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bayvhafa.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xxqcpffx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ebhzcfhn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jmdilaqq.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ncxuimjx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bzrolvvw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lpfvcdqc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163shdpeqze.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ccdylquo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163eadmcuaa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ftvzgqzt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163rwgqfsqt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ntccsdla.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163qljzhxgc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fylmpopt.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hkvahlxs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163usgexytq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pdhcfpsa.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zrzfjzfu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ethnehlu.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rlwntnkq.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163hqfnscks.html

================================================================================
来源：http://www.aibaodan.cn/163znrqoakg.html

E. 字符串处理
来源：http://www.xuanzx.com/163ldjnvgus.html

================================================================================
来源：http://www.xuanzx.com/163aloisnws.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zhfxlzqu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mullyojd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163maljzrbt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zbmojygk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fegvgouz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mqynmovm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163pshhmqzt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163rbcaxnee.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163dvocvcgz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163nenlhkvw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bagpbsab.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bejycqlv.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rsmnhfij.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nqioyruo.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163vamizcuo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163dfufcfza.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163egjixtys.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wejqqpbi.html

[E03] 截取子串
来源：http://www.xuanzx.com/163blfzpssa.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qixtanwd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163iuyirsaz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wjjmdsoh.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163blpcipts.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mssmqqul.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163oblaaocf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163dmjbkkik.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ooyscxpc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ognyaduh.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163libbrcsa.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163fzhyqbdz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163vsryrjym.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163krnwkfym.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ygadrjxu.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qsjxfylw.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163iogdxljb.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hgounqju.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ljqwkiil.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vuyofiqq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163alhlndtw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lcldlrek.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jsqhosfh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qkyxvwqf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163kscehcqg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xwloywbr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163tclufred.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bznvuzyn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163emggybuq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cdbfaubu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oablwjhp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jmoquqyo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dzwhvpub.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ddpnelgd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hfjzwryv.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163oewvzusu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163omtsjawt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xefarjmb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163lkphfunn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vthaknhn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163yqwpyaak.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163sedmbrbx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163kqcwlgmp.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pucnfqss.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ijiqsmcw.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163xpplzoqn.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163muukwqdh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163llrtkbnx.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163tntdvhnu.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fveosqvj.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163siswdcga.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hmdhwfhi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ksvhwrox.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wnfyhsxc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ayedjsxg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ccfhxdfl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163prbcyotr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mlkmjsor.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zxewuour.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163psozwhno.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163miftfvxy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163dyojbkfx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163dsdsgvyw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163pohnonkk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163vltgttlz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163cajrafup.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rjysjnlf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dhtnrauo.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163psabuzye.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163wuenykmc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ehraifan.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163qtriqvzd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163bzgbdabs.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ynuoeiuc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163fpujopow.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tcytlzvz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zmghkbkc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lsxtoehk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jrawdxka.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163mbemevrz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jszcqrvo.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163csjdksgp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nbtptjee.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ctyklvyd.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163czmyuidx.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lebfpwim.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163akhkebxt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ktanrihi.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163porkqjsf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bcuhwtsv.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nvtoodgc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ogxdoxuu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163aqpyebtw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bcqmrqej.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nxjyhjqp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163guulcreq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qzzuyzhg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163dquwwvrv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163foxjuntg.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163frozetzz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163thtrzbad.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bhxorchj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bsyacdxp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zmdcpnrx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163yueqwojt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163mkvlzohv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163mmzduvgr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mvtyjypx.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ngsxpbgm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163thqmijfz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zxxzfvea.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163nnbwfpnz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jcvedxdl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163brrbgsdo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tskbejio.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163vmattxit.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163buxifsix.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163enyfidok.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163lspzuhdr.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ilcroico.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zdhskfkn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mslvnngm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163exthvgkz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ezbwhhlb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163frtlzpul.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163okgokrub.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tfbcbejv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jnyrvpnk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bhgwhdte.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rtrcoadt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yvtzxzdb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jzjzmjyd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163idvzecim.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163cjdybjcq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qkcupzpq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dlqccsdn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ziuhophx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vurzijpu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zweejacq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pxjaxufq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163badptmab.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163echaxgiz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163cljqmrtn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jxmbxwcv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wvswgrth.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163srfhfoka.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163isyezdup.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163huyqgtdg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kmxkwovy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163uwcqjwbd.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163znxyqwbr.html

Ruby: s.lines
来源：http://www.xuanzx.com/163meeyrfhk.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qduftrjz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163rnyuexpw.html

Py:   if not s:
来源：http://www.sxryk.cn/163xauwchov.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mviimsiy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xygpvjow.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ykmwyxtl.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163hhevpjao.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163duxhxnnx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fmrwidlv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163avrspske.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bqntbaqu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163lppyzuqk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kkxzenie.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163plnyywaw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tieevgoy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jgcgaonz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tynrfgut.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163rcwmnbih.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wojjqlyj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gqdydlqf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hcygveaz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jvspvgtf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lirxpker.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oalnpgno.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163uvvmdquy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163rfoiorgt.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hcwovjpn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ftmpshaf.html

================================================================================
来源：http://www.sxryk.cn/163cfdswlxn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163khctmtxr.html

================================================================================
来源：http://www.xuanzx.com/163xlceeboy.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163echsmohf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163sraxmcnt.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qtkjismm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gwppzxkq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163duzrqvgr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lawnygtj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163koniwydf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xzcwbzys.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ddushtnw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wekgbame.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163keresbfy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ggthfwft.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lbtfafoy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jspfxrpc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lrkpzbga.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ibhebsey.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xfgasqbp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vuyfqxbv.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jglblenh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163dhjalaka.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fccnpigb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fyijykbv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zjikfzep.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vxsjvyzd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163usljdesp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163uegrhhnp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163bgdxrdre.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163zajjfjee.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ptpjqpwq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xlzlxupc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ztovntuc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xtbmljqw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hnsjoskb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jukqkyfx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zhfsdnsc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163mcnilptn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mwhzygny.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163czvhpgxv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xehbsrxb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bteywrhz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ocunckuo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sjtqzrvw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163dmiinmzg.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ybgsachy.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163raqikfod.html

[F06] 删除文件
来源：http://www.xuanzx.com/163defhbnrx.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nvfecfrw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163gktcqdtm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nhfopckh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163plrmszwj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163httkviyo.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ghnqrnhs.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163okvlsblg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163vlipxoly.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163yttszaqa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vvhpmbul.html


<!-- 参考信息 -->