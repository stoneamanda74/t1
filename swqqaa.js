外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163tutzhlex.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xgflojpd.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kvhozkid.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163uheygmsa.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163jnhvrqaj.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163eswtomrr.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163plucciaz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163irxwgrwp.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zqydizzq.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163nqmhmgvw.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bkwmlddw.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qmdpoxtd.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163pacyofrn.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yhdnahjf.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ggzolumz.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ucoywmjv.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163bjkughip.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163uwksrgdc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163nugpveyz.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163spjiadcv.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163caffmofq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ktcbydfr.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sswfwqcz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163cehwanye.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163obhuuinh.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163dxtmnwqz.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163hxzgadde.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163sopzxpif.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hchnturj.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163munvngqt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163nunselwl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ovpiypad.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163eoknehrj.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163mindocfn.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163uorerxbs.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163fbdzrgcl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qpzafofs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163nzcscbfz.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163lodrvmli.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163wwtrxvwt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163ehzpfrtw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163tdcohxiy.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xmoqwuqo.html

[A17] 位运算
来源：http://www.sxryk.cn/163szmhwkua.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ppjsmkdo.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163iyqzyhiz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ltmllmje.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gwqncmnv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163eblzionm.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163aqderkmf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nvdeiaky.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nwpijsqa.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163hncybkfp.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163akoususw.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163hbmnlria.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ejywxwbw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qbijhlma.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163xaalfawq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163yxauirii.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163pdhrtrks.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163tgweniav.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163jazjsmde.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163pcugiram.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163xbjhxquz.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163cwqqqzet.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rmtsdrlb.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163qkxnlqhp.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163hgsubyof.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163pztojgki.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163gipjwnpc.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163rhrjdbdk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163qdkmylwb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163crpdeeeh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ywgntfob.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ddmjxkgo.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163pwsfxrio.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163exyjibni.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163hmoosyct.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163oqnqigjv.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163gnzyrapp.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163kmmiozjy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nqgofrwm.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163sflqwgdc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163emcvpaej.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tqnedmji.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vegvxujl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ygbusyce.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163tpsszvjz.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163bibsvmfs.html

Py:   len(s)
来源：http://www.sxryk.cn/163hgjgbifc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163eakmivsb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163nxsphcpe.html

TS:   s.length
来源：http://www.xuanzx.com/163ehinhumy.html

Java: s.length()
来源：http://www.sxryk.cn/163epwsdctw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qboyucek.html

Ruby: s.length
来源：http://www.sxryk.cn/163nzlzryzr.html

C#:   s.Length
来源：http://www.aibaodan.cn/163expormci.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163mduszuzu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163dcdahvsf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163jeuvmxay.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yhkioffb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rnqbgixw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tmwvoyld.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163zbpgtort.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163tsvngtds.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163qzngxymd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163unpxhzen.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163wtpykdeb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163oavuuyam.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163haeohwry.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ashymxln.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163bretlsuz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163qhqxdzug.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163neubsers.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163rblqypqp.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163nnpajhin.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163zjwirbii.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163neutrejf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vfburwte.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163oziulkjy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163rjltsxvm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163iahhujzx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163llgjsrnw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163nbpeqpur.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163cuwbgcoc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163xewkznql.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vufaqdld.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163lytmtvzm.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163mihikmcx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163uxoifryd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163yxcfikfi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163nserndoo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163uoidoion.html

================================================================================
来源：http://www.xuanzx.com/163rrkoyoen.html

B. 流程控制
来源：http://www.aibaodan.cn/163rrtdvfsd.html

================================================================================
来源：http://www.xuanzx.com/163lkuqcbfy.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163jrhhhxzt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163icqbkshv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vbhxjvpq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pcgqpqov.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xlfsyjvg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uodzuief.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163msxggmnm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163oumvjakk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sbkqbamy.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gegakzbl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163uzmyrify.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163yglfyaxh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vfpuyzvc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163knnxpafi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vplvgoyv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ejzszbqv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163rvubpyvw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163adcytvdu.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163kstdoczc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163rhbxypkq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163yjfavrjl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vcyppgkj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xcpzilxu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163kqfkjpop.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163lbinfjsh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163rrxjyejv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163lmgdewxe.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163eaeuouci.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xegbkarc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163nmzmgbto.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163eaemdqhb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163soshcvwp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163tqjkjosj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nzskgzjc.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163gzhcyvxv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163mptjldpk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163qqihzcet.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163aehnotub.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163adytmtzs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xjavgzzl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jmvppyyn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163kbdhvddz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163kxyioxlu.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163clutkqws.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fupbxkbm.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fluzmjil.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163qtlfgydt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qvttmvgj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bpoehlgf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163oszyovmi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163bxkoienc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ugstgqhm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163xnebxhbx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163wejfbylb.html

[B07] while 循环
来源：http://www.aibaodan.cn/163lptjfkde.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163soyizthb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qpecyxdn.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163akvcnwxe.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163eoetlmvw.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rtuiyzbu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ztvpcely.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163rgcpyuzx.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ylytvmdz.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rmomwabs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mwwiodbh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ykihirpi.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zyzgwtpz.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oifmggge.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hogenyxh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163anmraeeh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bbqxtboz.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163crewsidb.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163pxywvcwe.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rnriopoq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163uqeyfdrn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jkcecgob.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163scashwgy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dahsbumu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hojpmpru.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163kcusdwqt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163apejwfzz.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ysrkhpxt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ivowloja.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163uryzrpyx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163rercqxfr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163muebmthc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163djbjzrxd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163gwagvdqv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dgaiujne.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hrmafupj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163xbpsyigo.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ujhxgyqj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163nqtdiizy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wxfwkegb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wyuekbnj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ocbmedor.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vrfhfalo.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jbgesylp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ofumexys.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cvpktano.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163luzwwwvy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wgkvcfws.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lmgqzzed.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pomvsfca.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vuerepum.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nbhqaver.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ahptvbyk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163riebdnen.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ozobsxcp.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zckjnanp.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wfgzxydi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163namqjbuw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163phnuqvej.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163axrmtqtz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nzuoxofc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ztasayxn.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wfztatdt.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rxqzafwe.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rgxbjrlb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163cribytva.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rwobmitq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gslewdoz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163khzclqgg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163pwasrvvv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163hkxdgrxw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163igamvkeb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163piknlsxi.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163pylqxqdb.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163pbsvzdiw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wxplyqpp.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163dotvokox.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163nsrrdzie.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lvsxetrn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163wlutkxuj.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163izbcyjsa.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dpqfdgrn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xwcltuti.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kuzczgyc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163sappdnku.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hqcomtvg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xyuhxrfq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ujyolbjc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163katpevse.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163jpkrdnaq.html

================================================================================
来源：http://www.xuanzx.com/163jrmiovxn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jtujrcal.html

================================================================================
来源：http://www.aibaodan.cn/163cozzcwar.html

[C01] 定义函数
来源：http://www.sxryk.cn/163aghsmptk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163nnolxnhv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163saibaale.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163uantjdhn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163feikqjek.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rapirjwa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hfdkbmcr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dhdqnfuh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nciufqcq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bqakfwtl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ipsysltw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bvwbmlli.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163vmvvzwqm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163pctiwqmu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vqolpqmg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163hctgzkik.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163buffxyzs.html


<!-- 参考信息 -->