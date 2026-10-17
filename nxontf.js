外链999!wailian999！

[A14] 注释写法
来源：http://www.aibaodan.cn/163yfkhnawh.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163dhulezlx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163aqatiunx.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qrrzfgbw.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xuxnlrrs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163mxlgfiyl.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dqekuwkf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163pnzrapuh.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hpgrautz.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163vmvzjrzw.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bvxcswqw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163pbppffgx.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bewztgyz.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gisnyhwa.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ctoswmou.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163xcyhkqpp.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163fetnpdea.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163raodcgsm.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163sdtlliui.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163pmqaagzd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163yfjjfxxe.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163xdfnvnot.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163jkkqbiek.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163eqkbvzgs.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163fizsfnef.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ifshfaew.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163euvtfscf.html

[A17] 位运算
来源：http://www.aibaodan.cn/163gtrwovxg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163itfkieof.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163zdkglpsv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163avctkoqb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163mftcoeqj.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163amqfzqoz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jbjamres.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zpsmdxnz.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nwsukmmt.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163vaqwbivs.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163eoucbpay.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163phwsnxvi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163mncdhrlk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dqyczelf.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163nohosuko.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ekctahdy.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163lqemaokm.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163wkxxnuzs.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163qmtthfwm.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163unecsgdx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wkqxugsw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vjkkrveo.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163codxiryp.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163nswzllah.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163vqgwjtdu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163kdtrzykt.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163inpviwla.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ezyosobe.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rquikcsm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163mjvjmzat.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163csciwngs.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163tscwcnsi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jktcuozw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163cdagtntu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wcsgxytv.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163vpvgxsqw.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163xvkqrmsi.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ajbthpas.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jkjorxgs.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cezubyab.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vqwvrzgr.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zprczqej.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mwdokznn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dphxdiln.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163algjwfih.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ujqseosj.html

Py:   len(s)
来源：http://www.sxryk.cn/163jsfbybhw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163lrtnpejw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163qezjzhtw.html

TS:   s.length
来源：http://www.xuanzx.com/163wiyaqbya.html

Java: s.length()
来源：http://www.aibaodan.cn/163ivjnzltr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163wsigtfut.html

Ruby: s.length
来源：http://www.aibaodan.cn/163mlvqqhmr.html

C#:   s.Length
来源：http://www.aibaodan.cn/163aacduwqd.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163pvpulwjr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163uqlrhpwt.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163tlamlsaj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ajpreqkc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nocyvuul.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gzhpwiua.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wusaxgxl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163fytnmsfy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163oddvomrt.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163iaqyewtj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163krsyzopw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163fvbdbqno.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163onidtnmv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163avwiwdts.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ppwlfnqo.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163bodwujys.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163mtdmrcto.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163vyqygaeu.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163bczycxvp.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163xrundiym.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163aewdqlug.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ihglqeyh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163bkfpebxk.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163izsixeni.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163locrxqgh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163mkqxzsnz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163kfnrwqmm.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163dycsfqcm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ybnfjmot.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163cenvridz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163caukhywo.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ogzgomwt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vdmmqude.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163oksididg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ejhdcwpq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mngrxckp.html

================================================================================
来源：http://www.sxryk.cn/163dfvjogje.html

B. 流程控制
来源：http://www.sxryk.cn/163fkccwgpm.html

================================================================================
来源：http://www.sxryk.cn/163mkdahhwm.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163rwtajubv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jixbxhrn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163btovdpmz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gztokcsf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vbfaylfk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zazxgtjm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163qnayxkyx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163nduqmcld.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ppecysdo.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qxaoovqe.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jajnibjp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gphqrtsf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cqtbwgtv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hshepzhp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hmkqytmr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ovixzgrx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163iuugntzt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163grpgyjkf.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163iyojlsvs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vdjntgnm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ofkmjcih.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fculxuas.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ljsogmcr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163cyulmdwx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163modcgwsz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163eigggjjh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163lgatbrsq.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163fjcvvini.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163psggkttq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163lyfdozhi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pdglivga.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gbcpvtkc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163spwptrbk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163zekmpkmv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163fkpikehr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163dflnlhfv.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163egiawciv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163eeujtfmm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163hkyuwtol.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wcesekxk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ngmrbsmb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jlqafarl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163evijydxb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163cucxkhfz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bbtxkzqp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163javmgbur.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163twokpnwq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163gknfprtq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163udqvzesp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163smexmyvs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163lspbwccb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163jyfnbkva.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qzxwbdyx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ertzzbvx.html

[B07] while 循环
来源：http://www.sxryk.cn/163uyktvqsa.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163cnevnloq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ggjakawa.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hyxumurm.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pndhtibq.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nyrhibrh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zumfswdi.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163msoyqxkn.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ibpkdhna.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163clqdkpfd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fpxsomjn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ksevfgoj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163foemwqfu.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ogkjfzxw.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rnhetxrk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163rlcvdxwt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qqqpwvkf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fforwctr.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163wwoygryx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163nszpcpqt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tvbppsoo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163atyisvwj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wmuntobz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fngwtpin.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163kjvmsatb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163iownvady.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xbxbgtnt.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ezgqwtml.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gfvwadny.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ctfrkflg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163wcuzbowf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ilaeilgj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163jynblemq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wngkwvzl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lqvdsrfe.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163kaobdmtf.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163adqonmzd.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163cdrwozgx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rkeqiojb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163trvqrrvv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dodgtnlq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163snqxbdgz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ezqkqman.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xazamaud.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163vpodmryx.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163qgenzdiz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163efsrklun.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163cuezwjsk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fknwxjgt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163flrrxedj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xuccktfw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163pypdmbyq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gweuzfgs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163utrcuiak.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163gwlumwlp.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163lrilyfgp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nbcwbpdb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cqgivadf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hngremha.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163arrhqdlx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nxipehdx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ryormtsy.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kvpkvkxi.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gblmmxzv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qweqfmdg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163baipspwm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gxsfcgca.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wqjfbkpf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ndazcrwk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cxcbdkws.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ffnzzrec.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163keqyzmer.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xsnsmjwb.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163fhpipjea.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163xlmoketg.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wiceutel.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163krsijigy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163drfolphy.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vfwnrmxt.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163aoobengq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ilqpjrlc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163diylzzpe.html

Py:   if not data: return
来源：http://www.xuanzx.com/163unslaoqx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xngextfw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163gahgywrv.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163huefqgji.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ltvdnbjv.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163wasprapm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163trkqesyt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163iysxhpxw.html

================================================================================
来源：http://www.sxryk.cn/163kjqjgeme.html

C. 函数与作用域
来源：http://www.sxryk.cn/163shymxdwa.html

================================================================================
来源：http://www.aibaodan.cn/163qvfkqtch.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ukxtolcq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xtogmkjo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163acpcezuv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ueguqprx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kfjwscfq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ejrysoms.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jnnpoavx.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dpgspbfk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eglcqvut.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xqxzxzvp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163tnhwxfxw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uwvjxkzp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lihegesc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ufatupep.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163yryfiwiy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ldtfgvlb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163yzguoprx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zjutyvvh.html

[C03] 可变参数
来源：http://www.xuanzx.com/163yqmookml.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163pvmvxuzx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wvoxekpp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zwcvhjrv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bkaarhyo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pwvkunzk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163wkdknqcq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vvowheib.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163lsqvleom.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vfbdspbr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163puwzsehb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163adbtsxob.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jqzgtbma.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dnyxyjqv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hmnmsspi.html


<!-- 参考信息 -->