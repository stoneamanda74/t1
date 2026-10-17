外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vsbmtxkk.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163afzxwpef.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163cdjuszxf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163iijdnaki.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163lmeesuax.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ixgtvmhm.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ptshysbb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163yqltcgac.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163kidnhikc.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163qldfhxya.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163jxnqqomr.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163wtjbkixy.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ohglzlnh.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163vnyjplbp.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hjaspicb.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163auvlmdqi.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163palljunv.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cayixwea.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163opaypshd.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163aydkaurf.html

[A14] 注释写法
来源：http://www.xuanzx.com/163voofwhtq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163bgpjodak.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163dnvhvpbx.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pxtynzrp.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163uketmstg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ierjovqi.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ftykndlw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163yceuvnuu.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rwdytcdk.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163pfmwlzmm.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163fxzmrmjn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zgtqyufg.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163krunokno.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163aubiahha.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163pinptakp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163tkqkfhog.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bdzqcvpo.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qjeavrjr.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163icarrvyc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ysvglgte.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163lnmwpzvd.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163xlcghodu.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163upjmdsya.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163owrdwxko.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163oroocjnu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163wjczmlyr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xdgqdigp.html

[A17] 位运算
来源：http://www.xuanzx.com/163nmuwafxn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tljirfjt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163gocobwyw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163onghmick.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ngcbqkwg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163esxikjij.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tdqfpyzq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bdywdmss.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jawxiugb.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163tfczyupw.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163wwtoaqsl.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163migybruu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163datzqcct.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xtnqjwby.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163pupjsjun.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163nxmyghdm.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163hbpoxrtj.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163eyjfvvtu.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163itirbzkp.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163tedhdfvj.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163hxeincph.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ufvwfzvd.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163gnfipvgb.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163zijphgnw.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163qingbmyg.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163grbnhfmp.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163uabyrnkf.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163vcclmlsk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163qqflrful.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163jsawuguc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163iowkjdnb.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yejuiltj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163fshsjnul.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163srczuahs.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163sbfvymvv.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163qswgwzsj.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163gjgwougn.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163cjpvpjru.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163reptaxjp.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rbgpozwc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163kpkprbhd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rxrzujrk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ccchbsds.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bcpetvkt.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163rvpdaidv.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163nwcijrwu.html

Py:   len(s)
来源：http://www.sxryk.cn/163uvjolkkt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163qcbmimul.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163echtwsxk.html

TS:   s.length
来源：http://www.sxryk.cn/163uvntzyvu.html

Java: s.length()
来源：http://www.aibaodan.cn/163mbgvhhfw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163tfuxwkdy.html

Ruby: s.length
来源：http://www.xuanzx.com/163kyfisock.html

C#:   s.Length
来源：http://www.sxryk.cn/163tkeyihgs.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163wlythrvo.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ufpjodsu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163wbhwtyic.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uctosfly.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163cfoactcc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ysgcaofz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163czmvgtfa.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ziiharad.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163yaqggchv.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163cluirjfg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163yhjhoctz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163rlkvsrdu.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163lwplxlcb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163onhuiybi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163iychgieo.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163xyocxkfr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wfwkkmep.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163cadrhidz.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163txzglxvy.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163kgazjfcb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163lfvaepov.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bayncfzt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pvpegsdx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gqzjbsli.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163asgufryj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163mqkdihsk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xcwbmril.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zxfmyfld.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163kxxllhxd.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163nauagocv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163eeyiiqib.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wqaevbha.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163lckdyrsy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163xbisgfbg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163keipihrn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163kmcezqob.html

================================================================================
来源：http://www.aibaodan.cn/163xargtzub.html

B. 流程控制
来源：http://www.sxryk.cn/163pchsgifd.html

================================================================================
来源：http://www.sxryk.cn/163agfgxphn.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163dwcghmpf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163clhtecbq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vrbkqmeh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eijpqdhl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ymvoijnv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163grcmkqbb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163etalztec.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vomihsgs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wskfrhzm.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163dljxxran.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163vhkkojku.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zahoaiod.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fcxklefj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ntglpnfa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zsfmnrqg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163nifantxh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ovpgbqlq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jdznystf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163wzzhgjkk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163gureytsi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163fkpmhdga.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wmpvlqkp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wcjxfdxn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163nxtrlnfc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vilyxkhb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163txwabvcq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163yxdjngug.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163dfmxkdyh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163wldlklka.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163whsztegk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vogoguxl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163cxevqqmn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163vkebzdkt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wxovvbjd.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xhihsytq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163vsmfiabx.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163oymusiow.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163avynuekw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163whronlcr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dzqqgztm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mzrwjusq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163sfwwcqoy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nqkimjdr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163zebpusof.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mbquhgdc.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163mypjxnxn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163qyrrhkse.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163beciwtwa.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163efhotgep.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wnvfqzaj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163cywssxvr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163wxmjbzgg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dhweylsr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163dzijhgpv.html

[B07] while 循环
来源：http://www.xuanzx.com/163ommncakb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zodlfjet.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163woiuwygf.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163huwxgemt.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163brwwvqcx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163smlnpfqt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163bncgbpjo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163yylivjkp.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ambxcshm.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ftuslfub.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163tosvxgoz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163nrbmkvsi.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qyodksxf.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kgotdcqv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zsjluqvq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jqnehvrn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ouncrmwp.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gitvbyqv.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163wwfkzhcb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163focrurtx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dlgdqxdz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fyylfqfl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163actpohyy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jrptdqtd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163jgfsxprw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163pkygnmnn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163poteqzda.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163sdxjlknz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tiodbcwh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kphnfckf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zuuqirit.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qdcbosmi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163drfzccwm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163irxuixrq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163qukcmgur.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bxcfzqgf.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163fjlmxkbv.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163upcziqvs.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163acbxwjbh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wacoezhd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dkefjcsn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163lrqfyjqn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ynpbrscd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ecgabbds.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163xjkstswf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163yntmjffn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163juflityc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ajsdldfr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wtaoazsm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ljfpfcoc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dqzzxpzf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wojgrxpr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ayzmanaq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mwifedwn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163yryfzjax.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163oybcsfgx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xaqubkmt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gnmshxmi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vycnzbyi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163akadmsjr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163dpxdqazz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dxeojbna.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163aedbjpci.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kzemvnzz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163cgqkkjtw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163rccyttrl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yrlxaqmk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kwcqguln.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163nmbuvkbf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163evwlhefd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lsbhotaj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163teagmyhl.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163dqzgfctv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163tfspfecf.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bvhsabli.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mugubiqn.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ydlvlcdc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xcakoyzr.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163pxjfursd.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163akudpsdq.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wginjbij.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163nplyjimj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lypqjevg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hmnaiccs.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163eoakvgft.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ckmzezzk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jevzyvcd.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cyovvnox.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163scwjbmpc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zzltqbdh.html

================================================================================
来源：http://www.xuanzx.com/163vknveaci.html

C. 函数与作用域
来源：http://www.sxryk.cn/163akflndnl.html

================================================================================
来源：http://www.xuanzx.com/163knuluooy.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qasjlfeb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163vhljlofr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xipnwrld.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ktqrzyeu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163flgehxsy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fnckoypk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163kzapespr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ajpddqkp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tcimrngs.html

[C02] 默认参数
来源：http://www.sxryk.cn/163uhpbriwg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gmetykzc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dllhofqk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163imtoqwag.html


<!-- 参考信息 -->