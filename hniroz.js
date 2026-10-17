外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163hxvyclkv.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163pbpgyssh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ufubfrjf.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163unuoqbxr.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163humtznzg.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ilonqcwi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163dmnfbkpl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sxczuuju.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163texsindl.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zxfeqcec.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uaakfwwf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163jxjyaxqd.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pxhjpcex.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xaajrecn.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163etsuyvvv.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163llaogivv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163vgcmjjbe.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163avlynrqc.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uxnkcfrb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163uxcdmuhi.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163bgfevxiq.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tdxcyizv.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163dbzmiurq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163vtacbzwb.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dkxmwalg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163tjslgswa.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fxbmtska.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vwmtbtzw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163mgyicaxp.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wnetwkvx.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163yoimcapp.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dvclczsu.html

[A14] 注释写法
来源：http://www.xuanzx.com/163vdomdguf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163phzjdjyr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163zodhmrnx.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hiptzjiq.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ggbudbyw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163fwvnzvof.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ielhugnm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163hyzdmsti.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sdfhrnrx.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ucaapjvp.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163yqucfxxm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163njnspqpg.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163cphinfqo.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163svmljvyd.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163nlnerffg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163qrpjffuc.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ouyjucys.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163kszbwpqt.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163rtdxxkcf.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163rqsgscvb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163rmsnwxij.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163hvtfaozr.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163znmpulhh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163izfzupnp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163tptxalzb.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163kvhldccj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163iatgfgjv.html

[A17] 位运算
来源：http://www.xuanzx.com/163hgdevqwa.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ksdhhkko.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163giijdpfs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dbdegtzl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dqqvszyo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kqodxonx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fzaxfbvm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163racmabju.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yhnsrndz.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163kxvpqyas.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163fhxzaebe.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163hfzyjwmo.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163juriuizq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163nkyeqzvj.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163qgszzzkg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163gkmvlbys.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163wxmmaeex.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163dvnfkeyf.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163yvmcymzo.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163qponkixn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163nnyfxsoi.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163luwiqrqx.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ivmjaelz.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163gpxpzikd.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rleyxijz.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163munpnjcn.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163idgojkhm.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163bkxgbxow.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163vnsrczla.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163lqvvzhoo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163qzeolqec.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163xwesossb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163sxwcyoor.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ipnaugrk.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163szwptota.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163yoaaodhh.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163vdjymzxq.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ernhqxwt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fdqfcwko.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163kmczsuyg.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163tfouxmwv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wzddqyle.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bygsxmht.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ntkvcprk.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163lmxnkkyq.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163gqxcooas.html

Py:   len(s)
来源：http://www.aibaodan.cn/163trocbzba.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163yxobkrbv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163tizatkit.html

TS:   s.length
来源：http://www.sxryk.cn/163khvqebfx.html

Java: s.length()
来源：http://www.xuanzx.com/163slfufoiw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163zkkbbvqd.html

Ruby: s.length
来源：http://www.sxryk.cn/163wjbdrdpr.html

C#:   s.Length
来源：http://www.aibaodan.cn/163mjisiyhh.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163drtmrjms.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163uoeurbfc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163dhvkouuw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163aoeluxuv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163fmbvzmkv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163umbuhsju.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163fqxjubps.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163xbefblau.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163xvkwouux.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163nztckhep.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ahbnubrs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163byadolpn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163coanrnuk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jpsxdivh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163qdqukmtr.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163rerdnesr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163fzohqcle.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xfmtbrpg.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163dliwpywe.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163tjkkcoak.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163rxakwedl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163fzfwsasj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163egxykdrp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163rvpmzgic.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jioklkbs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163vuakjbhw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163sqnuylay.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163joheczhj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xwodthhe.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163bpvcvwgv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163jqqhlptf.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163emtgoxtv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163bmsfubur.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163elrsmint.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ntrsywoc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163kmgdnhqk.html

================================================================================
来源：http://www.aibaodan.cn/163qrzvbmqx.html

B. 流程控制
来源：http://www.sxryk.cn/163tdjehxhs.html

================================================================================
来源：http://www.xuanzx.com/163cppkynox.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163tcrucvej.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163szjovplo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163fnrfxiqn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kbffbtql.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mvrxkwtd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ajbvuizl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163npfieeuq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163frppcabj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tcwqftxw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163aqrfdqwj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ldzyhtiu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163jntyvwgp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ggtoqchv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ispayjjh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hlvatrju.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163mdgzegdo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rcldazsd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rtsqfdal.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163flgwzfko.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xjuklmfk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163vckqqtau.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163htztwmin.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zxjgatsl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163trzqujbp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163hbbgqddo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ypwwbqua.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qbbpawyf.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163wwakpdxp.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163zfxpwdwa.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163deznycez.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lhunuoca.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bpefjrri.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ttsxshnh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163hbiatoqs.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163siikkpzl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163bvfiboye.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163zdiuzehh.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dctbenae.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163fqtsjxbf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163benkheld.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pffdwtfi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163edarbbao.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ehvwvcqu.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wqykivtv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163sibkqofy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163fademrzj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163iqbwtjjb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vlqtwcou.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163psmxgzdn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163faizplcr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163nanuntdl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zdhdgxmo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fmwzqmuz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163lyqtxzsu.html

[B07] while 循环
来源：http://www.xuanzx.com/163ethhvela.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163edxhrjag.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gihjhshw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ldpzketn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zvlxyzpw.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163szpxeisu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gybnlhgt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ifreeyls.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163skrhqfva.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163azhxbcbz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kntagqtz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163isapalun.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vlybditw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lgucidei.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hazfsilp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fexeflln.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163vogzzkek.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163umdtgjxj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163kotjwehu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163mldixvwb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163nazgxswy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ogmesnmq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tvjylomo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jidowtax.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pwqrgean.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hlkqetlb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kogqdyev.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tnybnfrk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163rdxbeftz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qrbitnml.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ssvzsjcl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ybykczae.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163okjakknh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163szijgsbd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163tfkcqsso.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zlzgspcz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hvwzbhic.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xucflxbg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zxylmovp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uvlrfahy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wgexvauc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163vnzyrtek.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163fwqkihdi.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163yiarlqyv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163qbtxiyok.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ffsrgfrf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bartkwdb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ohlsztov.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163deyuqbsq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lwlqibah.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163akathwmv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ycephfkt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163whspvwan.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163snejodmd.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163fgovreoj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163bsiymbni.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163pgaoupjq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163myxkqtor.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sdlycobp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163khxglhzc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163duvwjevl.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jekizbug.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163uyprjfls.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ycquxscq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gvwawwrv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163upxavisa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uriyiwat.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163umbyxily.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163znmbbaab.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rayzxset.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163wykkkige.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163fknsetcb.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ihrkkexk.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163rbgpvtor.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163oyileyxy.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vedkrvft.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nxlqxiks.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xkjdplyb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163srontetc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163varenlxz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163pbmoxsqc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vzctzjoe.html

Py:   if not data: return
来源：http://www.xuanzx.com/163criacytj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163geajprnd.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jptiwjyi.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hvvbxlri.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hrtxkjkh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kwaaskvc.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163hqwjvivo.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lhdeuxow.html

================================================================================
来源：http://www.aibaodan.cn/163vskeqnwo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vugwvquv.html

================================================================================
来源：http://www.sxryk.cn/163qpcjdprq.html

[C01] 定义函数
来源：http://www.sxryk.cn/163kajagcft.html


<!-- 参考信息 -->