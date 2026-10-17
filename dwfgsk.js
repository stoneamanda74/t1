外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bijjqwxa.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163xozwymtl.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jkfttlbm.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163kedjwswg.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163snyscknm.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yqwntbai.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163nkodkwoz.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bihgewxu.html

[A14] 注释写法
来源：http://www.xuanzx.com/163cxssfgvp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163zwkfxyfc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bfejdujw.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yeyefmek.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fqasmyrb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163xcbjydxl.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163aetpztmi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163wliuverj.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tccbqanx.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qjrxoyqq.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163oizswuin.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163asymjmyf.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163uljsdcjf.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163dxshjxxg.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ztobdwbe.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tbmtgxxn.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163mlvxvjmt.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163mbjsxoqi.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163pwdcxzyk.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163mtwwmyvp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163etwisaxp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163vdlbksir.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163eqbuyozb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163soskikzn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163jkkiulzk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163iooaczir.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163pcbnsylz.html

[A17] 位运算
来源：http://www.xuanzx.com/163kxctzawa.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lcczzvji.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163hsjyjmkg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163svflssyu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163vnsoinls.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xyskzjjd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mkuywsek.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tjfiropg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cjsjgxgt.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163wiidumms.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bonneedp.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163mgbiwtjr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163vuhwaxbt.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ampxeufi.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163dycoozma.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ejcwuutj.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163hpunqnhr.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163emzulool.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163owjzrpfq.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163kxmfbcvr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163zeyjwehq.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zikzpsas.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wkixtuas.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163xihxbiur.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163blobkbiw.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163kxwflmcd.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163yhkzzupp.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163tuegfdks.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163thpqxvfj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163nwiapbzl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163vpnnsuuq.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163omgyunnq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163fqkkmblb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163bxopvyut.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163lzjbjsyg.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163xwckfcyk.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163dtjfqmpg.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ployxtqm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163reyxmigj.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wxagpugj.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163vthqqfio.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163psgvchet.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tcbrmmhk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rjobjcrt.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163zfwypgjm.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163gdxjytpk.html

Py:   len(s)
来源：http://www.aibaodan.cn/163yubkoalm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163rwdlbuoq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163qloyteot.html

TS:   s.length
来源：http://www.sxryk.cn/163sxanligu.html

Java: s.length()
来源：http://www.sxryk.cn/163ggpvxsxn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zjttqlkl.html

Ruby: s.length
来源：http://www.xuanzx.com/163pqfdiuqs.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ueylmobq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163sidtzfyi.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163luftrgsw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163vvosmuye.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ssekchqp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ibnubhqb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163juqvrfyq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163glqzbdkf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163sczsvwke.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163oweevqge.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ogyzbgey.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163rpxtrqba.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vjzmkigh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wokjqnvq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rttcznib.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163uflwoseu.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163hxfulabi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163igbktmvd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163gmhdjqur.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ubaphsxv.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163szbmwgvx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163lmnllivu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qdgqeaoy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vapvqtjr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163wxhrsvjb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qradgvmr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163pnetnohm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163toodsgrj.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rpnxdbol.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163sfevhjbt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163dyfeijks.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163bcoucfxh.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ntwjwyot.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fpiqlwbf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163vzcllptr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163lvjbgjdi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163xownubqj.html

================================================================================
来源：http://www.xuanzx.com/163dtsjicqu.html

B. 流程控制
来源：http://www.aibaodan.cn/163prpofswe.html

================================================================================
来源：http://www.xuanzx.com/163vwphyyky.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163pvzsthcn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163gmyjrszj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163svhumtmo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rvxkaeks.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163aagbosml.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kptafens.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jygsizok.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163legrxdmm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pvrjpfye.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163whwymrlp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163uojftcby.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xpvpwthq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163furkvncd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ahrclijh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163krxdiapv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163gxtkoykr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163wmjeitzb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163chbkcwdb.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163sjcgtozr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163tmdxulwy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163nvhqmdqy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163alidyriz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tgablawl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163srwnsbbt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163boaqfsqm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163kzbhwtnx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qnggtujr.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163glnvzfmk.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bgmicraz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tdhltbqk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lwyxawks.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wszsavof.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163deqiavkm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163xparmvlc.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163zrnidhpr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163iixrdnjt.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163liocctcn.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163sjnbhvoa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163cqzrzrxy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nmaamsph.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163syffguvt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163uczzxhld.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fuuukncj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163wtizhidz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qylvjvod.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163qqfxcnth.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163qpfukfmj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163svjhfcqn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lnetcotq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ptnrufjr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gurzoucy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ezhpivxa.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rwiojiep.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163mjousxjj.html

[B07] while 循环
来源：http://www.aibaodan.cn/163malgqwoq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163powmskps.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qzxaifgy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xrbykbkq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zcedmzlg.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jhdrpfmn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163eccchrtz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163wuieanez.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ekchikui.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ifhatgjw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xxetsxhf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163gfaibbzk.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xsxvjsio.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mhkiytla.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uatoimqf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jpakslrr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163nvtntvdu.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jazghpah.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163oyxkgpld.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163biveuqpf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jqrthkei.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qynoaros.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fzhwldte.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hrcadpdq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163nfixciqr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163wztbjdfv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tujrztsz.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163haolqhor.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qodnmspg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ovvmxfpt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ttltxiie.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dytthblp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163eudspurx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kurvmjmk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163rcaxfyda.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163dvpszddx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zeprnrbi.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163pximkdtd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ghtfjsmg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zbfjajzp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ouiwrxwu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fhuqpbgm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hlkovqrs.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163aoyurznh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pjksfmoo.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wmgmhgba.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nquybskk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hqjdvfhe.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fjuzqosb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lcjvnsxb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rvzalyrv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163fxasnkvm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163grmuwefs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163uewjcqwo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kjqcxrmw.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gfhdomkk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163yuupbwtv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xmslbtcx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zvhhgcdk.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163jqweymod.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vlhyasev.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ghpnwxxh.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qelybqax.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163znqyyluf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jenbomqq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163djoutikz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tjjmmkak.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163paitpjjr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ffbwesiu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163udhhsdrb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163gbleqsrv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163paozwjhs.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tskljvst.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qoijuofp.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ligcigon.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pmcczmyx.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163umpkktaa.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163lcltnvbn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163imceulyg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tncjyksx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163itkudgjl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163htruelrd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163japqhyqa.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163egaaprkl.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xkycuqcu.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hrzidgvd.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jfknntpy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163wurphutj.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163txzoyrbo.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163sfviqsdt.html

================================================================================
来源：http://www.sxryk.cn/163spzprtwn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ikiaqggs.html

================================================================================
来源：http://www.sxryk.cn/163uxbrwlsj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lxuftkxk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163brstldvr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hryarfgp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163onmgpjce.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tdmceuyd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fnmqtwha.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163hrzpnvkf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xwigncld.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rxivivgt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mooyqahu.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163sdnerpzn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mpzxpctj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ryxjbjzf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gspirfxh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163udzkoiss.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tkxrxzbu.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wmjvqmmf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163secixphk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163dqmzzgaq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163dhrcbzma.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vdkjewdt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163iilphziy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ikplfehc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163esrjyzvl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lvldcatp.html


<!-- 参考信息 -->