外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vmunixis.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163avjcobun.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163qebufhip.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163xauouumz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163cpejgekn.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163godypkpt.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dxwihsqp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163iqpwyezs.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163pskopyhn.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163jkklyaii.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ebvmtyfp.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163arljpayi.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163eapfnasa.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163djrusbrj.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bfftdwhp.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163itbixmct.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163gqpqlbsn.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ikuadfpj.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163umekgbhx.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fmrafebv.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ocrhevlf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ehkvqlhy.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163fhumawiw.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vjufoqag.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uiutdxas.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163gblqrkyp.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ljcwjsrw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163acqiohgj.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fgugujqz.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163dlayvuns.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163jqnxlvbw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163agzlcdae.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lkfkknhb.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tzycpsrh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ijgnyhoy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163xzyqvaoc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163qbyiycew.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163grvcgwmj.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163oyoldrgj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163qxueygtr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ojgjswwx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163whzvegdv.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163tquosegc.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163fkbkdnob.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163jjdfrjxi.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163thrmgiqw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163hrsewviz.html

[A17] 位运算
来源：http://www.sxryk.cn/163ezxadqso.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pztpcojt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163efpkdkws.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ceaiubiy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163xildxmhw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ntmtdvfx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mlvlqewe.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ijsgrwda.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tornyjoz.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163iauqtdzz.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163tyieflmt.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ehjjrhep.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mlpjgsif.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mxyvzbfm.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163yfuolijc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ndulalib.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163bbbneyje.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163hgaqbkpr.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163coxkpypv.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163yzcflqcv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163vuajkbfo.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ggrknadd.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bnlvlcte.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163rjjfckxz.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163rdwzkxli.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163vgfzahcw.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163oegcwfnq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163mqtthzub.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163kvocobzc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163rqzybwds.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163fxfrvlqg.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163wvvryazb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163cngestrf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163lbhzzeka.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jmwbcyog.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163nchqrukl.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ckudsdyt.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163kzoeeicc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qmaplver.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163pdpctuja.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wggpkeya.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dxsdmfoc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163msxddgwe.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tjdcisyz.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163snfebgrv.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163qfxzarmx.html

Py:   len(s)
来源：http://www.aibaodan.cn/163rqvreonh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jphltxee.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ficisvwr.html

TS:   s.length
来源：http://www.aibaodan.cn/163zifmjdtc.html

Java: s.length()
来源：http://www.xuanzx.com/163mwcllado.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163kmhyllvh.html

Ruby: s.length
来源：http://www.xuanzx.com/163hmzsvfjo.html

C#:   s.Length
来源：http://www.xuanzx.com/163rxjelsye.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163xciyqtvt.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163xciamesn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163zmzynlyb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uaxnnpjy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163csxtglzk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lrovuwql.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163nbeaqwzw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163mtdkaeyn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163oocaswfg.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163afeerolm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163aixakofb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163wgoiatlx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163spmhxbqy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163kqphyrif.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163pludowxc.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hzxdlvok.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163tjrqqiqj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163qcjspxir.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163hihkpbkm.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163fgxpitwa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hweltlbn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ihbtojtg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yqxcjvce.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dlryhewq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jeucrxyw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163zroffalm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163nzndpmhw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163gxseglli.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ejwgopfy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ssfwtbfl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163uysyhaqn.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163weuditsn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163geddijtk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163qpmjdoql.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163fruuzbdy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163pdvfhhqs.html

================================================================================
来源：http://www.aibaodan.cn/163phxxjetu.html

B. 流程控制
来源：http://www.sxryk.cn/163bnrkwpsa.html

================================================================================
来源：http://www.sxryk.cn/163cktqqqnb.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hguwukna.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ohkhcvku.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163mbwtryam.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tbebwgrs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ougzhzgo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hedpspxi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wuxwrbhw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163fyuoeowc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163awechftp.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ljziurmp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gtsablds.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163qumvlqfz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hbaiyjya.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jawzvrfp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uamhrzpp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mgpuniem.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163gmsbalxh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lblatfoa.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163apsvxorf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bfmhydhz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ecwvvity.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zcjapekz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dxedpymc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163uajqxqqb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ifdfwnws.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jsuzocql.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163vrzweoys.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163zkzcetyi.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163fdgwkfng.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ckptmlel.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163txmbpdap.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gpxjrdag.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163defnkmxh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163zbardhtv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163qlxxfcwo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163oymudayj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163cimtmzag.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163rpwcfpkl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jsylkdwd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163diqmpqdu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mdadktkd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163mtdyclbn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163aviuxzxd.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163fninnomw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163kxtppcpg.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163zfbfaqvj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ekmpzelr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wqdcfaht.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kcnmzvfk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ypmjtnzl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163avrgzjdb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gwwsmesn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163sdyhvepb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vhbeugfz.html

[B07] while 循环
来源：http://www.xuanzx.com/163jyrxfcne.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163yjoydaiq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zsxqmiil.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pxexljzc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jggnxysn.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163chohcnmv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163dyuetgtr.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ozcycmde.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wuspycvr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163gvjhebhy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163tavkwhcf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163oxfuqhlz.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163faayxnfq.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kezgeqou.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ctixruea.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163noacpklq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163sjrpsiso.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163utvivtlh.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163fdvixruk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ubvedyph.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163lqrsbxwn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163muyvtnos.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zrkpixrn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bmsorlol.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163auzorrfp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163pbtwzpdh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tqyvrrrk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ilolvzjg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hdyevmeg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ypwyrthn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qtrqtnpy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rdpuncsn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rsrzzyjj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nnxktbff.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qdbafbxd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nrcgrzrz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163kafplbah.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ilygdnui.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163entlqwze.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dltimgue.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163sntrqpyd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ullvnrhq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163wlcqovnv.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ohzxrvji.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163lmokousg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163asdpimnl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163lnqgjnpc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163omlfkiky.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xwwkfmrf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rkfrcnbl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ejvvdaxv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163yycwlriz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163pffrnfws.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163bnnvqfkw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ivopdvmd.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wmlemvlm.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dkchpzhi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163znsseckd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ftxjjyph.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163fiylxtzv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163bpsdmjfd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kimtqajr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wbczshvt.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163whojnwzx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163gemqfbtt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163utohxpog.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dewzjfra.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xzqdqsqk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dbdfnngg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kjjrtaak.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bbaruqqx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bkakromq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163hewnschf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cbqjpskc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wkeyybxo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xyaygxhp.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163mtmxkcxg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hecicqdx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163buizysul.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163adelsklv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163bgenvfam.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163woeisasx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163anunqkca.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vzxjkmce.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163smthizaz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fwzrjjyq.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ygeyzyex.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ubwqriml.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dtluekrv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163panxwmem.html

================================================================================
来源：http://www.xuanzx.com/163yltkdage.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vbwcwtrm.html

================================================================================
来源：http://www.sxryk.cn/163mkusjjcj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163uyofcipa.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hvoqbcre.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ncznsedj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163gysgjdce.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jcdxyemw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jnapjhvu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dqtdljvu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qinwgeat.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zmpyujdj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fpgmhzty.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163carytguy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fjbosyax.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jqmfizuf.html


<!-- 参考信息 -->