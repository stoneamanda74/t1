外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163nlalwhii.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rmhgirjr.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163lhphvlxd.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163bwxtqhcj.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163xuouecnw.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163dhgplzjo.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163cbdwzcmj.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163sszcvwgs.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163qqyiuxri.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163fjfaajud.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ebdamnzk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ycmyzets.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163uwokbvxa.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163gvoqoaqj.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163pqctijbe.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zuthosib.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163hlzbwswy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163okqywprs.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wjstmfrj.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cxpskorz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ncgzhhhn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gjxbjqne.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xnfgwzsc.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163dwfxmoin.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163gpjdeyal.html

Py:   len(s)
来源：http://www.sxryk.cn/163pxwzbiur.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kpgvonwa.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163aperyvkr.html

TS:   s.length
来源：http://www.sxryk.cn/163gkuvmohc.html

Java: s.length()
来源：http://www.sxryk.cn/163eqftaect.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163xuhedmwx.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bgjunsnt.html

C#:   s.Length
来源：http://www.xuanzx.com/163tlkciogo.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163xtjdmhll.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163chkujgmf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163mkyxpelu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gbwnfsvg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hjznelok.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ngfzbnoy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163bmlbcsdt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163pxxcvoci.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163tlvpnski.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163cqjwuayb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163gswjkpgx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ghnjucsa.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ypeyutoj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wkyvrvet.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163drhovaqx.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163binmtmkl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163oeoarnvf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163nycplakj.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163cayerbsi.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ewhwjbge.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pvdxyash.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163nvwoyzpr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163flblxcgg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163mkgvmnnk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163yublebia.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163exsvuhnx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fcosnraq.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163bjfksdwz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163sbfqkwot.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163scgoxufl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163btjhygse.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163dsdjagrv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ysfeigoq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wwmkuwct.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163cdfvcjee.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163srmdptqd.html

================================================================================
来源：http://www.sxryk.cn/163bdlqpiuz.html

B. 流程控制
来源：http://www.aibaodan.cn/163ljjxtnbg.html

================================================================================
来源：http://www.aibaodan.cn/163ficskygp.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163czfqmgbs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163dyjfmcdv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163hisvnids.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mrflunzy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ssxqqjdj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mdaocwpa.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163bpquhbsx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ndwlhddc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mfgyekbc.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163deojhfip.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163nxqwsssy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163hggrstsg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ouxjuwdj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tjsmjhiz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163unroagvd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163affeckwr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ruvpasga.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zmbszmkj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163vuoyewmd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xptolhsm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ibsicxyv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kvytoxbx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tkktzygn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163jrtltpok.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163dkeblxwp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163uqtytzbt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163czuwwqjb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163bflhzskg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163djzfnpca.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163jmjbdlee.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bhmxkgfc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bvkbfksm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163wvqljdqv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163susvdrpk.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163penqevhy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163iebehemj.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163tsvrzdny.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163nqvobiio.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163uixkwjrp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gjkvruuu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163fljtiptt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163eutciwaj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163dfuzzjbx.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vpcscsyw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163irztjubz.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163yfdekrmk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163thliwkhc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163hixbhlzk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qfwvucti.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163omvxehqu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qwtyuwug.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163bcvvoalc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dcfmkzaj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ifrbejnx.html

[B07] while 循环
来源：http://www.sxryk.cn/163ronawdde.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zddjkzcn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xktfumol.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zyiozysz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fogvruqb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ngaqotvx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163zbyuerbp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lflhdkgh.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163udlnqcjb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zngfaify.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wwbaidgv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163iqgyansh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163omstlaiu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ngtjebew.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163khfiqmia.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163urmrwavn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163wyepdeoa.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163awhwglus.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163bhharngj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nxmalzvc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163pccflimf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kzgegdzy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wijweqiu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pvjzzcno.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163jiccczbo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163nucxwxsn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tuujuwwf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vyqhaxyw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163guckocwc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163kjnwusto.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163mlcuryue.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163nmoobuyz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163qqbbyivy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163qgrvasbh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163xrdnowtd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163hntggxdm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ouekqxth.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hbwqagxq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163clrqhivl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fxlilmfe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163iilpcosc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ospqiema.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163msdndeqw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163lxvoezzr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ufgueioh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fzztvfyd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163pnstgsqe.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163dbauetdo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bzamvajf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ulcgfixc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qdxfrpct.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ksqffrkp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rmwaybgy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163zxhypszf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163dwotvekj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163rzghzvtp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ncvqxzcy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dabuokrf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rnkpthcv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163rvbsfbcg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vzgmobgw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163itclvmay.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rxjvdctr.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163enznvpzq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163skwjyhqx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ufdofgra.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iorcorco.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163llkctdto.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163pmuwirir.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zfzyqwly.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163fcmkbfkh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tjyjvaof.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163fhlkgunz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dhqscyym.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jrgjnzgr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163yxuhxrug.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163evvgplvc.html

Java: a && b || !c
来源：http://www.sxryk.cn/163oliulbut.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vbfcoigz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ecokagas.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163szxoknug.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163yeqiskfe.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hkviluua.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ebpstmzj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163zcbwnvyh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163gowpdhmp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yugsbmab.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ipgeybwj.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163pelrvkgl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163fmntjcnb.html

================================================================================
来源：http://www.sxryk.cn/163gotcazab.html

C. 函数与作用域
来源：http://www.xuanzx.com/163izziwbaq.html

================================================================================
来源：http://www.sxryk.cn/163obzcbppm.html

[C01] 定义函数
来源：http://www.sxryk.cn/163dpmsglvu.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jklctxip.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163odxxltua.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lwomzjja.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jzhqdzjx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163demnbyhx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163givxvtra.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163uqqjzlkw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wpoqbccj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ubxdudnd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163kmhermrl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163stwnrama.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163oylrrnib.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163mltoqawj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qxsermji.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jdggxocd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163edfmoomo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163vuntcqnh.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zousayph.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163lkexxtvi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qvrykyfv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nvvapmxd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yrjhhekw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hrnwyfla.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cosnusin.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bzacliub.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163uvebryep.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ixajtalk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163fpqbpwlc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fajpnoos.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dowznybl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ddtvrtoo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163cgxhavdo.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163evpruklb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jxslzapq.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lvvsmbmz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163kdtuasab.html

Py:   return a, b
来源：http://www.aibaodan.cn/163oqgmlxtf.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qywqvrtr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163psfmcnge.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163etzefpnp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163kqaefomb.html

Go:   return a, b
来源：http://www.xuanzx.com/163ukbifvgn.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163okumlitu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163gcnkhfar.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163eimeqsxg.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163cwkqwffn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163etjotxlk.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163padefsub.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jngtpfjd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163iqrpewzg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163mqvwnnng.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ceylwmwc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ejnmwsnf.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ftwirnzv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163hjtprsap.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163clasrpgo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bwhubxbg.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163daxhvqcs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163zvbpjvlt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163jxpxbxes.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163cogajvol.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rymhyidb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163lkjdaosh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tksissif.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163dojusphh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163azzwpekk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xfmiyjpl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bwzdhppy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163eqjzikbc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163xxymuagc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bjccozjp.html

[C09] 递归
来源：http://www.aibaodan.cn/163trowjiav.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163hndskfjt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ybhzbshr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gcmqildq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yvqmubzi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163uhvetvfz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163rodjprvt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lozwtalv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zxtgfzmq.html


<!-- 参考信息 -->