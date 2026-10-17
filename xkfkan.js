外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163nfyoweil.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sqlfbiwc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163lnihjfwj.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sreqmavj.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163lfairvuf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163eurukbna.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163tkqpqmcp.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dlwpxwvh.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nbczwfgs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163entxabob.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cmtjesnl.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163wgvuobmv.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jkdcbiuq.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163bumzeyqv.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163bjdcnodl.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163mpqrfhpa.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163yttbkryx.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163spmolyom.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163eslkxdtx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163emwmvilf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163xkdbrodp.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163hcodjewd.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163oihqaycf.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163fgwhbmrp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163tyystira.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ocuwypop.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ulcxvdam.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ghaycelj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ottdsfoj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163njvgivnl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163tyslofvs.html

[A17] 位运算
来源：http://www.xuanzx.com/163wyosmltf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163feorrjfz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163vgkiwzyn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163upqunbqm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qfvseuaa.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ifxsykvi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jvludrov.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bvrjrtzk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ozjgowdy.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163bjltbibo.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163xxfzrbia.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163seogdvou.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163btatlkxz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163uqqfexig.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ichbvikg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163fzdwwifh.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163iybocltl.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163kxgzhvyw.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163gtpldrei.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163tpcjhqdo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163jjxyfute.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163sacgkiur.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ntldcvzn.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ivejywfo.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163qfytkriu.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163xhtarluv.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163yqvzmnuq.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163hbblucqf.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163isnzcndi.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163tkxarupk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ffvgptgr.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vceqoqfw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163vxguuhvq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163fyfchgoj.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zwbxmlmd.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163lyclnnlk.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163nyplidhj.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163albikuko.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zbrlixgp.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163psxkezbf.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lfzbykjw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163irzpjbmv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ibvnulfl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wtktonwz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163vkboqzoo.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163bqwgvwcw.html

Py:   len(s)
来源：http://www.sxryk.cn/163jfbrcofd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ihscsypv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163xondvttv.html

TS:   s.length
来源：http://www.xuanzx.com/163lwpwxbhv.html

Java: s.length()
来源：http://www.xuanzx.com/163otbzxeup.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163erhzdrte.html

Ruby: s.length
来源：http://www.aibaodan.cn/163zeameomx.html

C#:   s.Length
来源：http://www.sxryk.cn/163xmqlsusj.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163khuetepb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163jtmmxhmg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163yqizdioz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uqhitabo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kubuhtvm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jzvoalay.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163nphzeivl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pptccdtx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163bmgmdzai.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163njflyvru.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ouvetbsg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163kpxbusps.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ftwmykrg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tthkjjpv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163freslkqm.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rdfjpnkt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163anytrrru.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163towtosml.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163nhxzydwc.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163yuqleawc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163bgkowquf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cxsbfhla.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mtwktplx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163yhfrjyxy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163hysrzsmq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163uyrickij.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ldaipfri.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163geylpcnm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163dlzjrrne.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163forcihnf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163wqdnlqef.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163cqhdqayf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163wflqsxfd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163gknrqske.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163bmivkrai.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163pthgwwcm.html

================================================================================
来源：http://www.aibaodan.cn/163zjjrjlmn.html

B. 流程控制
来源：http://www.sxryk.cn/163xopomtbh.html

================================================================================
来源：http://www.xuanzx.com/163rjcgznrh.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163llljdgab.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jhxfghpv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163jtonarqi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bpapuepl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ntirlkrh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cblnbmim.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163idpvimga.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163uuugdgch.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mzqxrcqu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163uhhuwukp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163odarzoqk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163sityooaz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yzcpgbvj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oqwlucdm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163inzfguub.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163lfmtrjnm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163cochfoao.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wfbuhmee.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163nemiwszw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163vguwyfhz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163hmtfgwga.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163woecpaln.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zdoamypx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163txkfeemn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qicdbldz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163pfvenqgi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ceeazrwu.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163iistaezo.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163lgsewmwq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163eaolucbt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163foeuibsa.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ntixjigo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163sauqtfxc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rsxzzorg.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ahaaiguc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163nqkwrsxy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163swlhsdsf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kwencmuv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163hbvezcbn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tqeqvwlt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hkzjrusm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163luklwnke.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ovqjvgpa.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rjbmnomy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163dnfcbhio.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163uulcpsic.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163igadrcmx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163tbvoamai.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uubrwrbv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xdkslqyu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163enqjedmy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163wyypeqes.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hdsofxhj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163qnziwzdd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163pqacmqhg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ayxedbuc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163isofisil.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kznlfpte.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vrbrlcvt.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163khoegvwe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163yyevtghj.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163taevmqzc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163clqqwdop.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163qmeasdyh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163bcvnpkvx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163kjfmzdrj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163osrpasje.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ioiwtohj.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fntouutk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mxfpsvsg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gqptiasl.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163khkayneb.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163dnopbgxa.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163azbbjeht.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kjxfdisr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nwouecco.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nalbsmfs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wynoyfps.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163eyzjsvho.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zvnumejv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163miuhnmep.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163vigktswu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163dqqtitsk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qlixkygc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163icsnhddg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163grielsmo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163qqvsysqm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163crnenzrj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ladtncxe.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vrgckcxk.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vbauosmw.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163xpxbilcw.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tggxtctk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ifaihhof.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lrwzhyij.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mgbuueep.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163taffudrw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163gxqsthzy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163hwrlpnbz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163xxlbffvp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163coereunh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163yztbhehx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rfncjjub.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bffqueav.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wlmxoxap.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163yexqzsgu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mifoomlc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ftdffvba.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163pgpwluhx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163iwmkfwly.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163hpyopmup.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sfldpqgh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jvggmtpt.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163piveqvrl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wnqpmzfn.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163gyigtgxw.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163roqarbfd.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163smwusanl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uhvwlmjg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163lemzelhy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163aafxgbkz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163msypdamo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163lctdzszn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qjoljofg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lomkxiat.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pugnyjee.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cgqlvkya.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vnnusxqz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kdnasgcn.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ubqatalb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hvjbaqnb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zjxklzpm.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163hcceoscl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dtuicwbr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ezhuslnx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ujlpxqwc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163dztvxmzb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cdrjckap.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163szvjexxj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163llflvpin.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163hikiumrj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hhjgalxc.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lpsrfljw.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163efibwzut.html

================================================================================
来源：http://www.aibaodan.cn/163makrkuts.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lmupskzx.html

================================================================================
来源：http://www.xuanzx.com/163lcoyhvzk.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163uvpaaveo.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ithqumhc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fzpatkeh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163bsnngoar.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gksycldm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163noacctum.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163nzjlikdg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163szijirdd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pagpisot.html

[C02] 默认参数
来源：http://www.sxryk.cn/163cqdqprpe.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163sbfuywbn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wwkyjgsz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163jqdkyhzh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163bxjmuxsi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163imffnoiy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lqhdweez.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163fcjajeuh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163uueweoev.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mvfqluen.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163dfvkvipg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ugrzjqky.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qbtmrzjg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163aykpxbzs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gftccuxj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dcbweywl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163edznkkem.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163iwjdzufq.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163bxydweni.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163vikkwkbn.html


<!-- 参考信息 -->